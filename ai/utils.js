$(document).ready(function(){
  ethereum.autoRefreshOnNetworkChange = false;
  $('pre').on('click', copyToClipboard);

  function copyToClipboard() {
    let temp = $("<input>");
    $("body").append(temp);
    temp.val($(this).children('code').text()).select();
    document.execCommand("copy");
    temp.remove();
  }
})