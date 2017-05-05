$.ajax({
    url: "https://quarkbackend.com/getfile/karbassi/user-profiles",
    type: "GET",
    success: function(response){
        for(var i=0; i<response.length;i++){
            updateUserInformation(i,response[i]);
        }
    }
});

function updateUserInformation(index,user){
    var $user= $('.user-profile').eq(index);
    $user.find('.name').text(user.name.first + user.name.last);
    $user.find('img').
        attr('src',user.picture);
    $user.find('.company')
        .find('.name').
        text(user.company.name);
    $user.find('.company')
        .find('.street').
        text(user.company.address.street);
    $user.find('.company')
        .find('.city')
        .text(user.company.address.city);
    $user.find('.company')
        .find('.state')
        .text(user.company.address.state);
    $user.find('.company')
        .find('.a')
        .find('.email')
        .text(user.company.email);
    $user.find('.company')
        .find('a')
        .attr('href','mailto:'+ user.company.email);
    $user.css('background',user.favoriteColor);
}