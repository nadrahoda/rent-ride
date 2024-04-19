import request,{gql} from "graphql-request"

const MASTER_URL="https://api-ap-south-1.hygraph.com/v2/cltlfepzw17ra06w95h4x00c2/master"

export const getCarsList=async()=> {
const query = gql`
query Assets {
    carLists {
      carAvg
      createdAt
      id
      name
      price
      publishedAt
      seat
      updatedAt
      image {
        url
      }
      carType
      carBrand
    }
  }
`
const result = await request(MASTER_URL,query)
return result

}

export const getStoreLocations=async()=>{
  const query=gql`
  query MyQuery {
    storesLocations {
      address
    }
  }

  `
  const result = await request(MASTER_URL,query);
  return result;
}

export const createBooking=async(formValue:any)=>{
  const mutationQuery=gql`
  mutation MyMutation {
    createBooking(
      data: 
      {userName: "`+formValue.userName+`", 
      pickUpDate: "`+formValue.pickUpDate+`", 
      pickUpTime: "`+formValue.pickUpTime+`",
      dropOffDate: "`+formValue.dropOffDate+`", 
      dropOffTime: "`+formValue.dropOffTime+`", 
      contactNumber: "`+formValue.contactNumber+`",
      carId: {connect:
         {id: "`+formValue.carId+`"}}}
    ){
      id
    }
  }
  
  `
  const result = await request(MASTER_URL,mutationQuery);
  return result;
}


const DRIVER_URL="https://api-ap-south-1.hygraph.com/v2/clv4qg0w107k707vz0vnp2srs/master"

export const getDriversList=async()=>{
    const query = gql `
    query DriverLists {
        driverLists {
            createdAt
            id
            name
            price
            publishedAt
            updatedAt
            image {
              id
              url
            }
            rating
            carType
          }
        }
      
    `
    const result = await request(DRIVER_URL, query);
    return result;
}


export const createDriverBooking=async(formValue:any)=>{
  const mutationQuery=gql`
  mutation MyMutation {
    createBooking(
      data: 
      {userName: "`+formValue.userName+`", 
      pickUpDate: "`+formValue.pickUpDate+`", 
      pickUpTime: "`+formValue.pickUpTime+`",
      dropOffDate: "`+formValue.dropOffDate+`", 
      dropOffTime: "`+formValue.dropOffTime+`", 
      contactNumber: "`+formValue.contactNumber+`",
      address:"`+formValue.address+`",
      driverId: {connect:
         {id: "`+formValue.driverId+`"}}}
    ){
      id
    }
  }
  `
  const result = await request(DRIVER_URL,mutationQuery);
  return result;
}