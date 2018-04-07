let feedToken;
$(document).ready( ()=>{

feedToken = prompt("Enter Your Token To See Feed","");

if (feedToken == null || feedToken == "")
{
	alert("User Token Not Found")
	
}
else{
	$.ajax({
		type:'GET',
		datatype:'json',
		async:true,
		url:'https://graph.facebook.com/me?fields=feed.limit(100)&access_token=' + feedToken
	}).done(function(getdata,statuscode){
		console.log(getdata)
		for(x in getdata.feed.data){
		
	    $('#feed').append("#" + getdata.feed.data[x].story +"<br>")
		}
		
	}).fail(function(getdata,statuscode){
		
		console.log(statuscode)
	})
}
});


