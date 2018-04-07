let myToken;
$(document).ready( ()=> {
	
	myToken = prompt("Enter Your Facebook Token:","");
	
	if (myToken == null || myToken == "" )
	{
		alert("No User Token");
	}
	else{
	$.ajax({
		type:'GET',
		dataType:'json',
		async:true,
		url:'https://graph.facebook.com/me?fields=name,email,cover,birthday,quotes,gender,picture.type(large)&access_token=' +  myToken
		}).done(function(result,statusCode){
			console.log(result)
			$('#head').append("Hello!"+result.name+",")
			$('#Information').css('display', 'block')
			$('#userName').append(result.name)
			$('#userDay').append(result.birthday)
			$('#userGen').append(result.gender)
			$('#userMail').append(result.email)
			$('#userQuote').append(result.quotes)
			$('#Cover').css('background-image', 'url(' + result.cover.source + ')');
			$('#Profile').html('<img src="' + result.picture.data.url + '" class="img-fluid profilepic"/>');
			
		}).fail(function(result,statusCode){
			console.log(statusCode)
		})
	}
})
	



