

function book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
}

function info() {
	if (bookInfo.read == "yes") {
		return `${bookInfo.title} by ${bookInfo.author}, ${bookInfo.pages} pages, read`
	} else {
		return `${bookInfo.title} by ${bookInfo.author}, ${bookInfo.pages} pages, not read yet`
	}
}

const bookInfo = new book("The Hobbit", "R.R. Tolkien", 295, "yes");

console.log(info());
