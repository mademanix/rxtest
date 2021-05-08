import {from, of, merge, Observable, timer} from 'rxjs';
import {mapTo, delay, switchMap, tap} from 'rxjs/operators';

import {
    HelloMessagesCollection, 
    iPhoneMessagesCollection,
    CocktailMessagesCollection,
    HackerNotes
} from './const';

// i should use classes instead of making all-in-one file, but... that's it! im too lazy
// and this is like power point, and we know that nobody loves making power point things
// maybe i 2022 i improve this code lol

export class Welcome {

    private contentHandler: any;
    private contentHandlerText: any;
    private iPhoneHandler: any;
    private DELAY = 2000;
    private messages: any;
    private iPhoneMessages: any;
    private cocktailMessage: any;
    private messengeriPhone: any;
    private hackerMessages: any;
    private buttons: any;

    private COCKTAILURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

    constructor() {

        const streamText = of(null);
        const streamButton = of(null);
        const streamStartButton = document.createElement('a');
        const streamiPhoneMessages = of(null);
        const hackerMessages = of(null);

        streamStartButton.href = './messages.html';
        streamStartButton.innerText = "Let's go!";
        streamStartButton.classList.add('start-button');

        const streamCocktail = of(null);

        this.contentHandler = document.querySelector('div.content')
        this.contentHandlerText = document.querySelector('div.content > div.message-to-you')

        this.iPhoneHandler = document.querySelector('div.iphone > div.chat');


        this.messages = merge (
            streamText.pipe(mapTo(HelloMessagesCollection.hello)),
            streamText.pipe(mapTo(HelloMessagesCollection.butWait), delay(4000)),
            streamText.pipe(mapTo(HelloMessagesCollection.lurk), delay(8000)),
            streamText.pipe(mapTo(HelloMessagesCollection.haveFun), delay(12000))
        );

        this.iPhoneMessages = merge (
            streamText.pipe(mapTo(HelloMessagesCollection.rxjsText)),
            streamText.pipe(mapTo(HelloMessagesCollection.rxjsInfo), delay(4000)),
            streamText.pipe(mapTo(HelloMessagesCollection.rxjsFunFact), delay(8000)),
            streamText.pipe(mapTo(HelloMessagesCollection.rxjsContinue), delay(9200)),
            streamText.pipe(mapTo(""), delay(13200)),
        );

        this.buttons = merge (
            streamButton.pipe(mapTo(streamStartButton), delay(13000)),
        );

        this.messengeriPhone = merge (
            streamiPhoneMessages.pipe(mapTo({message: iPhoneMessagesCollection.msg1, who: 1, removeLast: false}), delay(1000)),
            streamiPhoneMessages.pipe(mapTo({message: iPhoneMessagesCollection.msg2, who: 2, removeLast: false}), delay(7000)),
            streamiPhoneMessages.pipe(mapTo({message: iPhoneMessagesCollection.msg3, who: 1, removeLast: false}), delay(9000)),
            streamiPhoneMessages.pipe(mapTo({message: iPhoneMessagesCollection.msg4, who: 2, removeLast: false}), delay(14000)),
            streamiPhoneMessages.pipe(mapTo({message: iPhoneMessagesCollection.msg5, who: 1, removeLast: false}), delay(16000)),
            streamiPhoneMessages.pipe(mapTo({message: iPhoneMessagesCollection.msg6, who: 2, removeLast: true}), delay(19000)),
            streamiPhoneMessages.pipe(mapTo({message: iPhoneMessagesCollection.msg7, who: 1, removeLast: true}), delay(20000)),
            streamiPhoneMessages.pipe(mapTo({message: iPhoneMessagesCollection.msg8, who: 2, removeLast: true}), delay(22000)),
            streamiPhoneMessages.pipe(mapTo({message: iPhoneMessagesCollection.msg9, who: 1, removeLast: true}), delay(25000)),
            streamiPhoneMessages.pipe(mapTo({message: iPhoneMessagesCollection.msg10, who: 2, removeLast: true}), delay(29000)),
            streamiPhoneMessages.pipe(mapTo({message: iPhoneMessagesCollection.msg11, who: 1, removeLast: true}), delay(32000)),
            streamiPhoneMessages.pipe(mapTo({message: iPhoneMessagesCollection.msg12, who: 2, removeLast: true}), delay(34000)),
            streamiPhoneMessages.pipe(mapTo({message: iPhoneMessagesCollection.msg13, who: 1, removeLast: true}), delay(39000)),
            streamiPhoneMessages.pipe(mapTo({message: iPhoneMessagesCollection.msg14, who: 2, removeLast: true}), delay(45000)),
        );

        this.iPhoneMessages = merge (
            streamText.pipe(mapTo(HelloMessagesCollection.rxjsText)),
            streamText.pipe(mapTo(HelloMessagesCollection.rxjsInfo), delay(4000)),
            streamText.pipe(mapTo(HelloMessagesCollection.rxjsFunFact), delay(8000)),
            streamText.pipe(mapTo(HelloMessagesCollection.rxjsContinue), delay(9200)), 
            streamText.pipe(mapTo(""), delay(13200)),
        );

        this.cocktailMessage = merge ( 
            streamText.pipe(mapTo(CocktailMessagesCollection.beginBeganBegun)),
            streamText.pipe(mapTo(CocktailMessagesCollection.imHappyAboutThat), delay(5000)),
            streamText.pipe(mapTo(CocktailMessagesCollection.whatIsIt), delay(10000)),
            streamText.pipe(mapTo(CocktailMessagesCollection.andWhat), delay(15000)),
            streamText.pipe(mapTo(""), delay(18000)),
        );

        this.hackerMessages = merge ( 
            hackerMessages.pipe(mapTo(atob(HackerNotes.start))),
            hackerMessages.pipe(mapTo(atob(HackerNotes.newbie)), delay(5000)),
            hackerMessages.pipe(mapTo(atob(HackerNotes.proof)), delay(10000)),
            hackerMessages.pipe(mapTo('<img src="./img/proof.jpg">'), delay(12000)),
            hackerMessages.pipe(mapTo((atob(HackerNotes.letmeexplainthis))), delay(16000)),
            hackerMessages.pipe(mapTo((atob(HackerNotes.britenet))), delay(21000)),
            hackerMessages.pipe(mapTo((atob(HackerNotes.britenet_secret))), delay(27000)),
            hackerMessages.pipe(mapTo((atob(HackerNotes.endoftopic))), delay(32000)),
            hackerMessages.pipe(mapTo((HackerNotes.letsthefunbegin)), delay(36000)),
        );
    }

    /**
     * andTheShowBegin...
     */

    public andTheShowBegin() {
        let that = this;
        
        this.messages.subscribe(
            message => that.contentHandlerText.textContent = message,
        );
        this.buttons.subscribe(
            button => {
                this.insertAfter(this.contentHandlerText, button);
            },
        );
    }

    public startiPhoneMessage() {
        
        let that = this;
        
        this.iPhoneMessages.subscribe(
            message => {
                that.contentHandlerText.textContent = message;
                that.contentHandlerText.style.fontStyle = 'normal';
                if(message === HelloMessagesCollection.rxjsFunFact) {
                    that.contentHandlerText.style.fontStyle = 'italic';
                }  
            },
            error => null,

            // im think that can be make better, but welp, this is my code lol
            // currently i know what will happen; i know i should use pipe() instead
            // but as I wrote, currently i know what will be fired next
            () => {
                document.querySelector('div.iphone').classList.remove('js-hidden');
                this.messengeriPhone.subscribe(
                    iphoneMessage => { 
                        let message = document.createElement('div');
                        let romanianOrSimon = iphoneMessage.who === 1 ? 'yours' : 'mine';
                        message.classList.add(romanianOrSimon);
                        message.classList.add('messages');
                        message.innerHTML = `<div class="message">${iphoneMessage.message}</div>`;
                        this.iPhoneHandler.appendChild(message);
                        if(iphoneMessage.removeLast) {
                            let messageFromTopToRemove = document.getElementsByClassName('message')[0];
                            messageFromTopToRemove.parentNode.removeChild(messageFromTopToRemove);
                        }
                    },
                    error => null,
                    () => {
                        const realUseOfRxJSButton = document.createElement('a');
                        realUseOfRxJSButton.href = './cocktailApi.html';
                        realUseOfRxJSButton.innerText = "Next, please, this is boring!";
                        realUseOfRxJSButton.classList.add('start-button');
                        let funnyiPhoneTextes = document.querySelector('div.iphone');
                        this.insertAfter(funnyiPhoneTextes, realUseOfRxJSButton);
                    }
                )
            }
        );   
    }

    public cocktailExtravaganza() {
        let that = this;
        
        this.cocktailMessage.subscribe(
            message => {
                that.contentHandlerText.innerHTML = message;
            },
            error => null,
            () => {
                document.querySelector('div.cocktail-container').classList.remove('js-hidden');
                document.querySelector('div.content').classList.add('js-hidden');
                document.querySelector('div.please-next-dude').classList.remove('js-hidden');
            }
        );

        const inputElementCocktailName = <HTMLInputElement>document.getElementById('cocktailName');

        inputElementCocktailName.addEventListener('keyup', function (evt) {
            if (evt.key === "Enter") {
                evt.preventDefault();
                    if(this.value.length >= 3) {
                        that.requestData(that.COCKTAILURL + this.value, that.mapCocktails).subscribe(
                            cocktail => {
                                if(cocktail) {
                                    document.querySelector('div.cocktail-container > div.name').innerHTML = cocktail.data.strDrink;
                                    document.querySelector('div.cocktail-container > div.note').innerHTML = cocktail.count > 1 ? 
                                        '(there is more similar cocktails name, but now I list first of all results)' : '';
                                    const cocktailImage = `<img src=${cocktail.data.strDrinkThumb} alt=${cocktail.data.strDrink} image>`;
                                    document.querySelector('div.cocktail-container > div.image').innerHTML = cocktailImage;
                                    document.querySelector('div.cocktail-container > div.instruction').textContent = cocktail.data.strInstructions;
                                    document.querySelector('div.cocktail-container > div.ingredients').innerHTML = "Ingredients<br/><br/>" + that.prepareIngredientsList(cocktail.data);
                                } else {
                                    document.querySelector('div.cocktail-container > div.name').textContent = "Oh no 😔 there is no results for what you want to know. Try again!"
                                    document.querySelector('div.cocktail-container > div.note').innerHTML = '';
                                    document.querySelector('div.cocktail-container > div.image').innerHTML = '';
                                    document.querySelector('div.cocktail-container > div.instruction').textContent = '';
                                    document.querySelector('div.cocktail-container > div.ingredients').innerHTML = '';
                                }
                                
                            }
                        )
                    } else {
                        document.querySelector('div.cocktail-container > div.note').innerHTML = "type at least 3 chars <br/> and hit Enter again, please 😊";
                    }
                }
            });
    }

    public hackMeIfYouCan() {
        let that = this;
        
        this.hackerMessages.subscribe(
            message => that.contentHandlerText.innerHTML = message,
        );
    }

    // jquery succ
    private insertAfter(referenceNode, newNode) {
        referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    }

    private mapCocktails(response): Observable<any> {

        const parsedData = JSON.parse(response);
        // just want to know that we hit more than 1 result
        return of(parsedData['drinks'] ? {data: parsedData['drinks'][0], count: parsedData['drinks'].length } : '');
    }

    private requestData(url: string, mapFunc: (any) => Observable<any>): Observable<any> {

        const xhr = new XMLHttpRequest();
        return from(new Promise<string>((resolve, reject) => {

          const targetUrl = url;
      
          xhr.addEventListener("load", () => {
            resolve(xhr.response);
          });
          xhr.open("GET", targetUrl);

          xhr.send();
        }))
        .pipe(
          switchMap((data) => mapFunc(xhr.response))
        );
    }

    private prepareIngredientsList(data: any) {

        let string = '';
        // we arleady know, that max no of ingredients is 15, look more in api response        
        for(let i = 1; i <= 15; ++i) {

            let ingredient = 'strIngredient' + i;
            let measure = 'strMeasure' + i;
            // PHP vibes lol
            if(data[ingredient]) {
                if(data[measure]) {
                    string += data[ingredient] + ' - ' + data[measure] + "<br />";
                } else {
                    string += data[ingredient] + "<br />";
                }  
            }
            
        }

        return string;
    }
}
