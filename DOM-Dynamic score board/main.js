//你需要把內容封裝在 displayPlayerList(players) 函式裡。

// 你可以使用任何語法來完成，但若想精簡程式碼，可能會需要思考：

// 在 JavaScript 裡要怎麼拿到 object 的 key？
//https://appdividend.com/2018/12/27/javascript-object-keys-example-object-keys-tutorial/
// 適合的迭代器(iteration) 是什麼？
// for loop

let players = [{
    name: '櫻木花道',
    pts: 0,
    reb: 0,
    ast: 0,
    stl: 0,
    blk: 2
  },
  {
    name: '流川楓',
    pts: 30,
    reb: 6,
    ast: 3,
    stl: 3,
    blk: 0
  },
  {
    name: '赤木剛憲',
    pts: 16,
    reb: 10,
    ast: 0,
    stl: 0,
    blk: 5
  },
  {
    name: '宮城良田',
    pts: 6,
    reb: 0,
    ast: 7,
    stl: 6,
    blk: 0
  },
  {
    name: '三井壽',
    pts: 21,
    reb: 4,
    ast: 3,
    stl: 0,
    blk: 0
  }
]

const dataPanel = document.querySelector('#data-panel')
displayPlayerList(players)



// write your code here
// function displayPlayerList(players) in literal iteration
// 0. add data in to #data-panel
// 1. for literation
// 2. icon + - next the the score in every block
// 3. ***important*** need to declare the tableConted = '', or the code will add <tr></tr> automatively.



function displayPlayerList(players) {
  const keyList = Object.keys(players.find(obj => obj.name))
  let tableContent = ''

  for (let i = 0; i < players.length; i++) {
    tableContent += `<tr>`
    for (let x = 0; x < keyList.length; x++) {

      if (keyList[x] === 'name') {
        tableContent += `
          <td>  
            <label>${players[i][keyList[x]]}</label>        
          </td>`
      } else {
        tableContent += `
          <td>  
            <label>${players[i][keyList[x]]}</label>
            <span class="fa fa-plus-circle"></span>
            <span class="fa fa-minus-circle"></span>
          </td>`
      }
    }
    tableContent += `</tr>`
  }
  dataPanel.innerHTML = tableContent
}

// add EventListener for plus and minus the score

dataPanel.addEventListener('click', function (event) {
  let score = event.target.parentElement.children[0]


  if (event.target.classList.contains('fa-plus-circle')) { // HTML classList contains
    score.textContent = parseInt(score.textContent) + 1
  } else if (event.target.matches('.fa-minus-circle')) { // CSS selector
    score.textContent = parseInt(score.textContent) - 1
  }
  console.log(this)
  console.log(event.target)
  console.log(score)

})