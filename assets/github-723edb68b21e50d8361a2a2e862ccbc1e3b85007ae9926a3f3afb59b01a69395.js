var github=function(){function a(a){return $("<div/>").text(a).html()}function t(t,r){var e=0,n="",s=$(t)[0];for(e=0;e<r.length;e++)n+='<a class="list-group-item" href="'+r[e].html_url+'">',n+='<h4 class="list-group-item-heading">'+r[e].name,r[e].language&&(n+='<span class="badge pull-right">'+a(r[e].language)+"</span>"),n+="</h4><p>"+a(r[e].description||"")+"</p></a>";s.innerHTML=n}return{showRepos:function(a){$.ajax({url:"https://api.github.com/users/"+a.user+"/repos?sort=pushed&callback=?",dataType:"jsonp",error:function(t){$(a.target+" li.loading").addClass("error").text("Error loading feed")},success:function(r){var e=[];if(r&&r.data){for(var n=0;n<r.data.length;n++)a.skip_forks&&r.data[n].fork||e.push(r.data[n]);a.count&&e.splice(a.count),t(a.target,e)}}})}}}();