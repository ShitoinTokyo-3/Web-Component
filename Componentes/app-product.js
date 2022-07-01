export class AppProduct extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'});

        this.img = this.getAttribute('img');
        this.title = this.getAttribute('title');
        this.collection = this.getAttribute('collection');
        this.price = this.getAttribute('price');
    }
    getTemplate(){
        const template = document.createElement('template');
        template.innerHTML = `
            ${this.getStyles()}
            <main>
                <section class='containerImg'>
                    <img src="${this.img}" alt="${this.title}">
                </section>
                <section class='containerInfo'>
                    <h2>${this.title}</h2>
                    <h4>${this.collection.toUpperCase()}</h4>
                    <p> <slot name='description'></slot> </p>
                    <div>
                        <span>${this.price}</span>
                        <button>buy</button>
                    </div>
                </section>
            </main>
            
        `;
        return template;
    }

    getStyles(){
        return `
            <style>
                :host{
                    --primary-bg : #5a6cb2;
                    --primary-color : #444;
                    --secondary-color : #999;
                    --dark-secondary-color : #a2a2a2;
                    font-family: sans-serif;
                    margin: 0 auto;
                    max-width: 1000px;
                    min-width: 300px;
                    height: 500px;
                    box-sizing: border-box;
                }
                main{
                    display: flex;
                    margin: 0 auto;
                    max-width: 1000px;
                    min-width: 300px;
                    height: 500px;
                    margin-bottom: 40px;
                }
                .containerImg {
                    position: relative;
                    background-color: var(--primary-bg);
                    width: 50%;
                    height: 500px;
                    display: flex;
                    justify-content: center;
                }
                .containerImg:before{
                    position: absolute;
                    content: '${this.title.split(' ')[0].toUpperCase()}';
                    top: 20px;
                    left: 20px;
                    font-size: 6em;
                    font-weight: bold;
                    opacity: 0.3;
                }
                .containerImg img{
                    position: absolute;
                    width: 700px;
                    transform: rotate(-25deg);
                    top: 90px;
                    right: -70px;
                }.containerInfo{
                    display: flex;
                    flex-direction: column;
                    width: 50%;
                    height: 440px;
                    padding: 30px;
                }
                .containerInfo h2{
                    font-size: 3.6em;
                    margin-bottom: 0;
                    color: var(--primary-color);
                    margin-top: 25px;
                }
                .containerInfo h4{
                    font-size: 2em;
                    color: var(--secondary-color);
                    margin-top:10px;
                }
                .containerInfo p{
                    margin-left: 45px;
                }
                .containerInfo div{
                    flex-grow: 1;
                    display: flex;
                    justify-content: space-around;
                    align-items: flex-end;
                }
                .containerInfo div span{
                    font-size: 3em;
                    font-weight: bold;
                    color: var(--secondary-color);
                    margin-left: -45px;
                }
                .containerInfo div button{
                    background-color: var(--primary-bg);
                    padding: 12px 20px;
                    font-size: 1em;
                    letter-spacing: 1px;
                    font-weight: bold;
                    cursor: pointer;
                    border-radius: 15px;
                }
                @media screen and (max-width: 900px){
                    main{
                        flex-direction: column;
                        height: 100%;
                        min-width:400px;
                    }
                    .containerImg{
                        height:320px;
                        width:100%;

                    }
                    .containerImg img{
                        position: absolute;
                        width: 500px;
                        transform: rotate(0deg);
                        top:68%;
                        left:45%;
                        transform: translate(-50%, -50%);
                    }
                    .containerInfo{
                        width:100%;
                        height:100%;
                    }
                    .containerInfo p{
                        width:80%
                    }
                    .containerInfo div{
                        flex-grow:0;
                        margin-top:100px;
                        position:relative;
                    }
                    .containerInfo div span{
                        position:absolute;
                        left:50px;
                    }
                    .containerInfo div button{
                        position:absolute;
                        right:150px;
                    }
                    
                }


            </style>
           
        `;
    }

    render(){
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }
    connectedCallback(){
        this.render();
    }
}
customElements.define('app-product', AppProduct);
