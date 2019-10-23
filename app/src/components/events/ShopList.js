import React, { useState, useEffect } from 'react'
import { fetchShop, addShop } from '../../actions/'
import { connect } from 'react-redux'



function ShopList (props) {
     const [shopItem, setShopItem] = useState({
          "list_name": '',
          "assigned_to_event": `${props.id}`
     })
     const handleChanges = event => {
          setShopItem({
               ...shopItem,
               [event.target.name]: event.target.value
          })
     }
     const submitShop = event => {
          event.preventDefault()
     }

     useEffect(() => {
          props.fetchShop(props.id)
     }, [props.isCreatingShop])

     if (props.isFetching) {
          return <p>Loading Task List...</p>
     }
     return (
          <div>
               <h3>Shopping List</h3>
               <form onSubmit={submitShop}>
                    <input
                         text="text"
                         name="list_name"
                         value={shopItem.list_name}
                         onChange={handleChanges}
                         placeholder="Add item"
                    />
                    <button onClick={() => props.addShop(shopItem)}>Add task</button>
               </form>
               {
                    props.shopList.map(item => {
                         return (
                              <div key={item.id}>
                                   <p>{item.list_name}</p>
                              </div>
                         )
                    })
               }
          </div>
     )
}

const mapStateToProps = state => {
     return {
          shopList: state.shopList,
          isFetching: state.isFetching,
          isCreatingShop: state.isCreatingShop
     }
}

export default connect(mapStateToProps, { fetchShop, addShop })(ShopList)