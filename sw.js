self.addEventListener("install",evt =>{
    console.log("Services worker is registered")
});
self.addEventListener("activate",evt =>{
    console.log("Services worker is activated")
});
self.addEventListener("fetch",evt =>{
    console.log("Services worker is fetched")
});