import React, { useState, useEffect } from 'react'
import { fetchShop, addShop, toggleItem } from '../../actions/'
import { connect } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';



function ShopList (props) {
     const [shopItem, setShopItem] = useState({
          "list_name": '',
          "assigned_to_event": `${props.id}`
     })

     const useStyles = makeStyles(theme => ({
          progress: {
            margin: theme.spacing(2),
          },
        }));
        const classes = useStyles();
        
     const handleChanges = event => {
          setShopItem({
               ...shopItem,
               [event.target.name]: event.target.value
          })
     }
     const submitShop = event => {
          event.preventDefault()
     }
     const resetForm = () => {
          setShopItem({
               "list_name": '',
               "assigned_to_event": `${props.id}`
          })
     }

     useEffect(() => {
          props.fetchShop(props.id)
          resetForm()
     }, [props.isCreatingShop])

     if (props.isFetching) {
          return  <CircularProgress className={classes.progress} />
     }
     return (
          <div className="eventSub"> 
               <h3>Shopping List</h3>
               <form onSubmit={submitShop}>
                    <input
                         text="text"
                         name="list_name"
                         value={shopItem.list_name}
                         onChange={handleChanges}
                         placeholder="Add item"
                         className="eventInput"
                    />
                    <button className="addBtn" onClick={() => props.addShop(shopItem)}>Add item</button>
               </form>
               {
                    props.shopList.map(item => {
                         return (
                              <div key={item.id} >
                                   <p><span className="task-button" onClick={() => props.toggleItem(item.id, 'shopping')}> O </span> {item.list_name}</p>
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

export default connect(mapStateToProps, { fetchShop, addShop, toggleItem })(ShopList)