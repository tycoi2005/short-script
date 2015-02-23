// open album
// run ^^
function like(){
	var likeBtn = document.getElementsByClassName("fbPhotosPhotoLike")[0];
	var likedClass = "viewerLikesThis";
	if (likeBtn.classList.contains(likedClass)){
		console.log("liked all");
	} else {
		likeBtn.click();
		console.log("liked one photo ");
		var nextBtn = document.getElementsByClassName("snowliftPager next")[0];
		nextBtn.click();
		setTimeout(like, 2000);
	}
}