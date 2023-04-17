//Updates Apples to say Granny Smith Apples
let applesItem = document.querySelector("#list li:nth-child(2)");
applesItem.innerText = "Granny Smith Apples";

//Removes Oat Milk from list
let oatMilkItem = document.querySelector("#list li:nth-child(4)");
oatMilkItem.remove();

//Adds Kombucha to list
let kombuchaItem = document.createElement("li");
kombuchaItem.innerText = "Kombucha";
document.querySelector("#list").appendChild(kombuchaItem);

//Clears list
let list = document.querySelector("#list");
while (list.firstChild) {
  list.removeChild(list.firstChild);
}

//Adds items from new 'items'-array to list
let items = ['protein bars', 'almonds', 'peanut butter'];
for (let i = 0; i < items.length; i++) {
  let item = document.createElement("li");
  item.innerText = items[i];
  list.appendChild(item);
}
//Makes almonds classy and important   (❍ᴥ❍ʋ)
let almondsItem = document.querySelector("#list li:nth-child(2)");
almondsItem.classList.add("important");
