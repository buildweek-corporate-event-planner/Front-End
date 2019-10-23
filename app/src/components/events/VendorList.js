import React, { useState, useEffect } from 'react'
import { fetchVendor, addVendor } from '../../actions/'
import { connect } from 'react-redux'



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
    
     useEffect(() => {
          props.fetchVendor(props.id)
          resetForm()
     }, [props.isCreatingVendor])

     if (props.isFetching) {
          return <p>Loading Vendors...</p>
     }
     const submitVendor = event => {
          event.preventDefault()
     }

     return (
          <div>
               <h3>Vendors</h3>
               <form onSubmit={submitVendor}>
                    <input
                         text="text"
                         name="vendor_name"
                         value={vendorItem.vendor_name}
                         onChange={handleChanges}
                         placeholder="Add vendor"
                    />
                    <button onClick={() => props.addVendor(vendorItem)}>Add vendor</button>
               </form>
               {
                    props.vendorList.map(item => {
                         return (
                              <div key={item.id}>
                                   <p>{item.vendor_name}</p>
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

export default connect(mapStateToProps, { fetchVendor, addVendor })(VendorList)