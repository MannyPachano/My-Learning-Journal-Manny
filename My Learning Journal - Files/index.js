import { blogArray } from "/data.js"

const blogSection = document.getElementById('blog-section')
const burgerIcon = document.getElementById('burger-img')
const burgerLinksContainer = document.getElementById('burger-links-container')
const viewMoreBtn = document.getElementById('view-more-btn')
const viewMoreContainer = document.getElementById('view-more-container')
let numberOfBlogPosts = 6
let startingBlogNumber = 3


// Render Initial Articles 

function renderInitialBlogArticles(blogArr){
    
    let blogHtml = ""
    const slicedBlogArray = blogArr.slice(0,6)
    
    slicedBlogArray.forEach(function(blogPost){
        blogHtml += `
            <div class="blog-card">
                <img src="images/${blogPost.image}" class="blog-card-img">
                <p class="blog-card-date">${blogPost.date}</p>
                <h3 class="blog-card-title">${blogPost.title}</h3>
                <p class="blog-card-content">${blogPost.content}</p>
            </div>
        `
    })
        
    blogSection.innerHTML = blogHtml
}

renderInitialBlogArticles(blogArray)


// View More Functionality

viewMoreBtn.addEventListener('click', function(){
    numberOfBlogPosts += 3
    startingBlogNumber += 3
    let viewMoreHtml = ""
    const addToBlogArray = blogArray.slice(Number(startingBlogNumber), Number(numberOfBlogPosts))
    
    
    if (numberOfBlogPosts >= blogArray.length){
        viewMoreContainer.classList.add('hidden')
    } 
        addToBlogArray.forEach(function(blogPost){   
            viewMoreHtml += `
                <div class="blog-card">
                    <img src="images/${blogPost.image}" class="blog-card-img">
                    <p class="blog-card-date">${blogPost.date}</p>
                    <h3 class="blog-card-title">${blogPost.title}</h3>
                    <p class="blog-card-content">${blogPost.content}</p>
                </div>
            `}) 
        
        blogSection.innerHTML += viewMoreHtml
    
})


// Burger Icon (Mobile) Functionality

burgerIcon.addEventListener('click', function(){
    burgerLinksContainer.classList.toggle('hidden')
})

