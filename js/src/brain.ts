import {Welcome} from './welcome';
import {TitleFanService} from './title';

const App = new Welcome();
const Title = new TitleFanService();

console.error('Failed to load resource: net::ERR_BLOCKED_BY_GOVERMENT');

switch (document.title) {
    case "the begin":
        App.andTheShowBegin();
        break;

    case "message":
        App.startiPhoneMessage();
        break;

    case "barman":
        App.cocktailExtravaganza();
        break;
    
    case "hacking time":
        App.hackMeIfYouCan();
        break;
}

