(function(){
    'use stricts'

    var ajax = new XMLHttpRequest()
    ajax.open('GET', '/')
    ajax.send()

    ajax.addEventListener('readystatechange', function(){
        console.log('terminunou a requisição',ajax.readyState, ajax.status)
    }, false)

})()