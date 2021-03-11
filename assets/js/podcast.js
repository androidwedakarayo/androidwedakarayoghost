$(document).ready(function(){
    $.ajax({
        url: "https://rsstojson.blacktests.com/rsstojson?rss_url=https://anchor.fm/s/1b9bf738/podcast/rss", 
        beforeSend: function (){
            $('#episode').html(`<div class="loading">Loading</div>`);
        },
        success: function(result){
            $('#episode').html(``);
            var episodes = result.channel.item;

            episodes.forEach((episode,index) => {
                $('#episode').append(`
                <div class="episode--list__player">
                    <div class="episode--list__item">
                        <div class="episode--image">
                            <div class="image-inner">
                                <img alt="" src="${result.channel.image.url}"/>
                            </div>
                        </div>
                        <div class="episode--content">
                            <h5>${episode.title}</h5>
                            <div class="content">${episode.description}</div>
                        </div>
                        <div class="episode--link">
                            <a target="_blank" rel="noopener noreferrer" href="${episode.link}"  class="btn">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM7 6l8 4-8 4V6z"></path>
                                </svg>
                                <span>Go to Anchor.fm</span>
                            </a>
                        </div>
                    </div>
                    <div class="player">
                        <audio src="${episode.enclosure['@attributes'].url}" controls/>
                    </div>
                </div>
                `)
            });
        }
    });
})