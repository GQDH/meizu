import $ from './library/jquery.js'

let all = ($(function() {
    $('.product').on('click', function() {

        console.log($(this).prop('checked'));
        console.log($('#addp>input'));
    })
}))


export { all }