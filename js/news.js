function addNews()
{
    var month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let title = $('#title').val();
    let content = $('#content').val();
    let date = new Date();
    date = month[date.getMonth()] + '-' + date.getFullYear();
    let author = $('#author').val();

    if(title == '' || content == ''|| author == '')
    {
        $('#error').css('display', 'block');
        return false;
    }
    $('#error').css('display', 'none');
    $('.news-table').append("<tr><td>" + title + "</td><td>" + date + "</td><td>" + content + "</td><td>" + author + "</td></tr>");
    $('#update')[0].reset();

    var news = {
        "title": title,
        "content": content,
        "date": date,
        "author": author
    };
    var newsJson = localStorage.getItem('news');
    newsJson = JSON.parse(newsJson);
    if(newsJson == null)
    {
        var newsArray = [];
        newsArray.push(news);
        localStorage.setItem('news', JSON.stringify(newsArray));
    }
    else
    {
        newsJson.push(news);
        localStorage.setItem('news', JSON.stringify(newsJson));
    }



    return true


}

function loadnews()
{
    var newsJson = localStorage.getItem('news');
    newsJson = JSON.parse(newsJson);
    if(newsJson != null)
    {
        for(var i = 0; i < newsJson.length; i++)
        {
            $('.news-table').append("<tr><td>" + newsJson[i].title + "</td><td>" + newsJson[i].date + "</td><td>" + newsJson[i].content + "</td><td>" + newsJson[i].author + "</td></tr>");
        }
    }

}
