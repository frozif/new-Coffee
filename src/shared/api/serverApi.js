function ServerApi(){
return {
  addReserve: (reserveInfo)=> {
    return   fetch("http://localhost:3001/reserve", {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({reserveInfo})
})
.then(response => response.json())
  }

}
}


export default ServerApi



