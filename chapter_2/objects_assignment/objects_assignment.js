$(document).ready(function () {

  // will create new empty journal when invoked
  function Journal() {

    // entries array
    this.entries = []

    // pushes each new journal entry to the entries array
    this.addEntry = function (entry) {
      this.entries.push(entry)
    }

  }

  // builds a new entry object
  function Entry(title, content, author) {
    this.title = title;
    this.content = content;
    this.author = author;
  }

  // creates new Journal stored in variable myJournal
  let myJournal = new Journal();

  $('form').submit(function (event) {
    // prevents default behaviour of submit form (stops the form from actually
    // submitting, which would refresh the page)
    event.preventDefault();
    // On submit, gets value of title, content and author    
    let title = $('.title').val();
    let content = $('.content').val();
    let author = $('.author').val();

    // resets form when page is refreshed
    this.reset();


    //creates new entry by passing in title, content and author
    let entry = new Entry(title, content, author);

    //puts entry created above into journal created further above
    myJournal.addEntry(entry)

    //adds new entries to page (creates html)
    $('.entryWrapper').append('<li class="post-title">Title: ' + title + '</li>', '<li class="post-content"> ' + content + '</li>', '<li class="post-author">Author: ' + author + '</li>')

  })

})