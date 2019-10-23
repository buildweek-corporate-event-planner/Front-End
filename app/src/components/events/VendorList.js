import React, { useState, useEffect } from 'react'
import { fetchVendor, addVendor } from '../../actions/'
import { connect } from 'react-redux'



function VendorList(props) {
     const [vendorItem, setVendorItem] = useState({
          "list_name": '',
          "assigned_to_event": `${props.id}`
     })
     const handleChanges = event => {
          setVendorItem({
               ...vendorItem,
               [event.target.name]: event.target.value
          })
     }
     const submitVendor = event => {
          event.preventDefault()
     }

     useEffect(() => {
          props.fetchVendor(props.id)
     }, [props.isCreatingVendor])

     if (props.isFetching) {
          return <p>Loading Vendors...</p>
     }
     return (
          <div>
               <h3>Vendors</h3>
               <form onSubmit={submitVendor}>
                    <input
                         text="text"
                         name="list_name"
                         value={vendorItem.list_name}
                         onChange={handleChanges}
                         placeholder="Add vendor"
                    />
                    <button onClick={() => props.addVendor(vendorItem)}>Add vendor</button>
               </form>
               {
                    props.vendorList.map(item => {
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
          vendorList: state.vendorList,
          isFetching: state.isFetching,
          isCreatingVendor: state.isCreatingVendor
     }
}

export default connect(mapStateToProps, { fetchVendor, addVendor })(VendorList)