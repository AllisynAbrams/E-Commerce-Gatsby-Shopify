// require("dotenv").config()
import React, { useState, useEffect, useContext } from "react"
import Client from "shopify-buy"

// ref:
// **** https://shopify.github.io/js-buy-sdk/index.html
// https://github.com/ginlane/gatsby-plugin-shopify-buy
// https://www.youtube.com/watch?v=tUtuGAFOjYI
// https://reactjs.org/docs/context.html
// https://tuts.alexmercedcoder.com/reacthooks/
// https://reactjs.org/docs/hooks-custom.html

// const SHOPIFY_CHECKOUT_STORAGE_KEY = "shopify_checkout_id"

// we are "building" or "initializing" the client to return our store's content
const client = Client.buildClient({
  storefrontAccessToken: process.env.GATSBY_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
  domain: `${process.env.GATSBY_SHOPIFY_STORE_NAME}.myshopify.com`,
}
)

// // setting initial store state to use as inital state object
let initialStoreState = {
  client,
  isAdding: false,
  checkout: { lineItems: [] },
  // lineItems are each item in our shopping cart - initially it starts out as an empty array (AKA no items)
}

// createContext creates a context object that essentially creates a provider and consumer
// ex. for useContext(StoreContext) ->
// the consumer - AKA component/code block calling useContext(StoreContext) - can read the context (which is provided by the provider) and will re-render any time the value of the context in question changes/updates
// the provider StoreContext.Provider is what provides the value for the context to be read by consumer component(s)
const StoreContext = React.createContext(
  {store: initialStoreState,
  setStore: () => null,}
)

console.log("this is StoreContext", StoreContext)

// // const createNewCheckout = store => {
// //   return store.checkout.create()
// // }

// // const fetchACheckout = (store, id) => {
// //   return store.client.checkout.fetch(id)
// // }

// const setCheckoutInState = (checkout, setStore) => {
//   const isBrowser = typeof window !== "undefined"
//   // if type of window is NOT undefined (aka anything other than undefined) then statement is TRUE
//   if (isBrowser) {
//     // setItem takes in two params, a key and a value, to create a new key/value pair if a value doesn't already exist for the key
//     localStorage.setItem(SHOPIFY_CHECKOUT_STORAGE_KEY, checkout.id)
//   }

//   setStore(prevState => {
//     return { ...prevState, checkout }
//   })
// }

// setStore explaination:
// ref: https://stackoverflow.com/questions/54807454/what-is-prevstate-in-reactjs
// ref: https://reactjs.org/docs/state-and-lifecycle.html
// ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
// prevState comes from React's setState hook
// in the above setStore we are using the functional setState =>  rather than just the objects of prevState & "current props" because when they are just objects they can be updated asynchronously and may not update to be what we actually want (AKA the current state may not actually get overwritten as we are expecting).
// "To fix it, use a second form of setState() that accepts a function rather than an object. That function will receive the previous state as the first argument, and the props at the time the update is applied as the second argument" -reactdocs
// above setStore we are using spread operator to clone the prevState object and then update the value of the prevState checkout key to the value of the current checkout key

/* -------- STORE CONTEXT PROVIDER -------- */

const StoreContextProvider = ({ children }) => {
  const SHOPIFY_CHECKOUT_STORAGE_KEY = "shopify_checkout_id"


  const [store, setStore] = useState(initialStoreState)
  console.log("this is store - ", store)

  useEffect(() => {
    const initializeCheckout = async () => {
      // checking to see if there is an existing cart in local storage
      const isBrowser = typeof window !== "undefined"
      const existingCheckoutId = isBrowser
        ? localStorage.getItem(SHOPIFY_CHECKOUT_STORAGE_KEY)
        : null

      const setCheckoutInState = (checkout, setStore) => {
        const isBrowser = typeof window !== "undefined"
        // if type of window is NOT undefined (aka anything other than undefined) then statement is TRUE
        if (isBrowser) {
          // setItem takes in two params, a key and a value, to create a new key/value pair if a value doesn't already exist for the key
          localStorage.setItem(SHOPIFY_CHECKOUT_STORAGE_KEY, checkout.id)
        }

        setStore(prevState => {
          return { ...prevState, checkout }
        })
      }

      // setStore explaination:
      // ref: https://stackoverflow.com/questions/54807454/what-is-prevstate-in-reactjs
      // ref: https://reactjs.org/docs/state-and-lifecycle.html
      // ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
      // prevState comes from React's setState hook
      // in the above setStore we are using the functional setState =>  rather than just the objects of prevState & "current props" because when they are just objects they can be updated asynchronously and may not update to be what we actually want (AKA the current state may not actually get overwritten as we are expecting).
      // "To fix it, use a second form of setState() that accepts a function rather than an object. That function will receive the previous state as the first argument, and the props at the time the update is applied as the second argument" -reactdocs
      // above setStore we are using spread operator to clone the prevState object and then update the value of the prevState checkout key to the value of the current checkout key

      const createNewCheckout = store => {
        return store.checkout.create()
      }

      const fetchACheckout = (store, id) => {
        return store.client.checkout.fetch(id)
      }

      if (existingCheckoutId) {
        try {
          const checkout = await fetchACheckout(client, existingCheckoutId)
          if (!checkout.completedAt) {
            setCheckoutInState(checkout, setStore)
            return
          }
        } catch (e) {
          localStorage.setItem(SHOPIFY_CHECKOUT_STORAGE_KEY, null)
        }
      }

      const newCheckout = await createNewCheckout(client)
      setCheckoutInState(newCheckout, setStore)
    }

    initializeCheckout()
  }, [])

 

  return (
    <StoreContext.Provider
      value={{
        store,
        setStore,
         addToCart: (variantId, quantity) => {
    if (variantId === "" || !quantity) {
      console.log("missing size and/or quantity - both are required")
      return
    }
    setStore(prevState => {
      return { ...prevState, isAdding: true }
    })

    const { client, checkout } = store

    // checkoutId is a reference to what session this user is on
    const checkoutId = checkout.id

    // lineItems are an array of the items a user adds to the cart
    const lineItemsToAdd = [{ variantId, quantity: parseInt(quantity, 10) }]

    // const newCheckout = await client.checkout.addLineItems(
    //   checkoutId,
    //   lineItemsToAdd
    // )

    return client.checkout
      .addLineItems(checkoutId, lineItemsToAdd)
      .then(checkout => {
        setStore(prevState => {
          return { ...prevState, checkout, isAdding: false }
        })
      })

    // setStore(prevState => {
    //   return { ...prevState, checkout: newCheckout, isAdding: false }
    // })
  } 
      }}
    >
      {children}
    </StoreContext.Provider>
  )
}











/* -------- CUSTOM HOOKS TO USE THROUGHOUT OTHER COMPONENTS -------- */


function useAddItemToCart() {
  // "store" object is basically the buysdk object that handles a lot of stuff for us...
  // deconstructing useContext(StoreContext) because StoreContext was created with an object with keys of store and setStore..
  const { store: { checkout, client }, 
          setStore }
        = useContext(StoreContext)

  async function addItemToCart(variantId, quantity) {
    if (variantId === "" || !quantity) {
      console.log("missing size and/or quantity - both are required")
    //   return
    }
    setStore(prevState => {
      return { ...prevState, isAdding: true }
    })

    // checkoutId is a reference to what session this user is on
    const checkoutId = checkout.id
    // lineItems are an array of the items a user adds to the cart
    const lineItemsToAdd = [{ variantId, quantity: parseInt(quantity, 10) }]

    const newCheckout = await client.checkout.addLineItems(
        checkoutId, lineItemsToAdd)

    setStore(prevState => {
        return { ...prevState, checkout: newCheckout, isAdding: false}
    })
  }
    return addItemToCart
}



function useRemoveItemFromCart() {
    const {
      store: { checkout, client },
      setStore,
    } = useContext(StoreContext)

    const removeItemFromCart = async (itemId) => {
        // remove a line item from the cart based on the itemid
        const newCheckout = await client.checkout.removeLineItems(checkout.id, [itemId])

    setStore(prevState => {
        return { ...prevState, checkout: newCheckout }
    })
  }
    return removeItemFromCart
}

function useCartItems () {
    const {
        store: { checkout }
    } = useContext(StoreContext)
    return checkout.lineItems
}

function useStore () {
    const { store } = useContext(StoreContext)
    return store
}

export {
  StoreContextProvider,
  StoreContext,
  useAddItemToCart,
  useRemoveItemFromCart,
  useCartItems,
  useStore,
}
