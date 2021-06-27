//Arrow funtion

// + Do not have this
// + Do not have arguments
// + Can’t be called with new
// + They also don’t have super


let group = {
    title: "Our Group",
    languages: ["JAVA", "JS", "ReactJS"],

    showList() {
        this.languages.forEach(
            language => console.log(this.title + ': ' + language)
        );
    },
    test: () => {
        this.languages.forEach(lan => console.log(lan))
    }
};

group.showList();
group.test(); // error because this == null
