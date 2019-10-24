import React, { useState, useEffect } from 'react'
import { fetchVendor, addVendor, toggleVendor } from '../../actions/'
import { connect } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';


function VendorList(props) {
     const [vendorItem, setVendorItem] = useState({
          "vendor_name": '',
          "assigned_to_event": `${props.id}`
     })
     const handleChanges = event => {
          setVendorItem({
               ...vendorItem,
               [event.target.name]: event.target.value
          })
     }
     const resetForm = () => {
          setVendorItem({
               "vendor_name": '',
               "assigned_to_event": `${props.id}`
          })
     }
     const useStyles = makeStyles(theme => ({
          progress: {
            margin: theme.spacing(2),
          },
        }));
        const classes = useStyles();

     useEffect(() => {
          props.fetchVendor(props.id)
          resetForm()
     }, [props.isCreatingVendor])

     if (props.isFetching) {
          return <CircularProgress className={classes.progress} />
     }
     const submitVendor = event => {
          event.preventDefault()
     }

     return (
          <div className="eventSub">
               <h3>Vendors</h3>
               <form onSubmit={submitVendor}>
                    <input
                         text="text"
                         name="vendor_name"
                         value={vendorItem.vendor_name}
                         onChange={handleChanges}
                         placeholder="Add vendor"
                         className="eventInput"
                    />
                    <button className="addBtn" onClick={() => props.addVendor(vendorItem)}>Add vendor</button>
               </form>
               {
                    props.vendorList.map(item => {
                         return (
                              <div key={item.id}>
                                   <p><span onClick={() => props.toggleVendor(item.id)}>X </span> {item.vendor_name}</p>
                              </div>
                         )
                    })
               }
          </div>
     )
}

const mapStateToProps = state => {
     return {
          vendorList: state.vendorList,
          isFetching: state.isFetching,
          isCreatingVendor: state.isCreatingVendor
     }
}

export default connect(mapStateToProps, { fetchVendor, addVendor, toggleVendor })(VendorList)