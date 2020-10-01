let form=document.getElementById("form");
form.addEventListener("submit" ,(e)=>{
   e.preventDefault();
   var states=document.getElementById("search").value;
   console.log(states);
   searchState(states);
}
);
function searchState(states){
window.fetch('https://api.covid19india.org/data.json').
then((apiData)=>{
    console.log(apiData);
    return apiData.json();
}).then((newData)=>{
 const statewise=newData.statewise.map((newvalues)=>
 {
     if(newvalues.state==states)
     {
        
        document.getElementById("demo").innerHTML=`
        <div class="stateBlock">
        <div class="card"><h3>Active</h3><span>${newvalues.active}</div>
        <div class="card"><h3>confirmed</h3><span>${newvalues.confirmed}</div>
        <div class="card"><h3>deaths</h3><span>${newvalues.deaths}</div>
        <div class="card"><h3>deltaconfirmed</h3><span>${newvalues.deltaconfirmed}</div>
        <div class="card"><h3>migratedother</h3><span>${newvalues.migratedother}</div>
        <div class="card"><h3>recovered</h3><span>${newvalues.recovered}</div>
        
        </div>`;
     }
    console.log(newvalues);
 }); 
//  console.log(statewise); 
 
});
}