const summaryList = document.querySelector('ul')

fetch("./data.json")
    .then(res => res.json())
        .then(data => {
           data.forEach(element => {
            console.log(element['category'])
                if(element['category'].toLowerCase() == 'reaction'){
                    console.log(element['category'])
                    const htmlStr = `<li class="category-item-reaction">
                        <div class="item">
                        <img src="${element['icon']}" alt="" srcset="">
                        <p class="category-name">${element['category']}</p>
                        </div>
                        <p><span class="score-value">${element['score']}</span> / 100</p>
                    </li>`;
                    const fragment = document.createRange().createContextualFragment(htmlStr);
                    summaryList.appendChild(fragment);
                
                }
                if(element['category'].toLowerCase() == 'memory'){
                    const htmlStr =   `<li class="category-item-memory">
                        <div class="item">
                        <img src="${element['icon']}" alt="" srcset="">
                        <p class="category-name">${element['category']}</p>
                        </div>
                        <p><span class="score-value">${element['score']}</span> / 100</p>
                    </li>`;
                    const fragment = document.createRange().createContextualFragment(htmlStr);
                    summaryList.appendChild(fragment);
                    
                }
                if(element['category'].toLowerCase() == 'verbal'){
                    const htmlStr = 
                    `<li class="category-item-verbal">
                        <div class="item">
                        <img src="${element['icon']}" alt="" srcset="">
                        <p class="category-name">${element['category']}</p>
                        </div>
                        <p><span class="score-value">${element['score']}</span> / 100</p>
                    </li>`;
                    const fragment = document.createRange().createContextualFragment(htmlStr);
                    summaryList.appendChild(fragment);
                    
                }
                if(element['category'].toLowerCase() == 'visual'){
                  const htmlStr = 
                    `<li class="category-item-visual">
                        <div class="item">
                        <img src="${element['icon']}" alt="" srcset="">
                        <p class="category-name">${element['category']}</p>
                        </div>
                        <p><span class="score-value">${element['score']}</span> / 100</p>
                    </li>`;
                    const fragment = document.createRange().createContextualFragment(htmlStr);
                    summaryList.appendChild(fragment);
                    
                }
           });
        })

function create(htmlStr, category) {
    var frag = document.createDocumentFragment(),
        temp = document.createElement('div');
    temp.innerHTML = htmlStr;
    while (temp.firstChild) {
        frag.appendChild(temp.firstChild);
    }
    return frag;
}