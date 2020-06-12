function change_quote(){
    // initialize all quotes, names, and titles
    let quotes = ["The biggest risk is not taking any risk… In a world that’s changing really quickly, the only strategy that is guaranteed to fail, is not taking risks.",
                "If you're offered a seat on a rocket ship, don't ask what seat.",
                "It’s fine to celebrate success but it is more important to heed the lessons of failure.",
                "If you don't innovate fast, disrupt your industry, disrupt yourself, you'll be left behind.",
                "We want to build technology that everybody loves using, and that affects everyone. We want to create beautiful, intuitive services and technologies that are so incredibly useful that people use them twice a day. Like they use a toothbrush. There aren't that many things people use twice a day."
                ];
    let names = ["Mark Zuckerberg, Co-founder of Facebook",
                "Sheryl Sandberg, CEO of Lean In", 
                "Bill Gates, Co-founder of Microsoft",
                "John Chambers, CEO of Cisco",
                "Larry Page, co-founder Google"];
    

    // get necessary element with querySelector
    let quote = document.querySelector("blockquote > p");
    let name = document.querySelector("blockquote > footer");
    
    while (true)
    {
        // create a random index between 0 and lenght of quotes(exclusive)
        index = Math.floor(Math.random() * (quotes.length));

        // compare the last value of the random func with the new value
        // if they are not the same value break the loop
        if (index != temp)
        {
            temp = index;
            break
        }
    }

    quote.innerHTML = '"' + quotes[index] + '"';
    name.innerHTML = names[index];

}