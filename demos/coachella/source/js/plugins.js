// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

var coachella = [
    {
        venue: "",
        start: new Date(2014, 3, 15, 10, 45),
        end: new Date(2016, 3, 15, 11, 45),
        name: "a tribe called red",
    },
    {
        venue: "",
        start: new Date(2014, 3, 15, 10, 45),
        end: new Date(2016, 3, 15, 11, 45),
        name: "ab-soul",
    },
    {
        venue: "coachella",
        start: new Date(2014, 3, 15, 10, 45),
        end: new Date(2016, 3, 15, 11, 45),
        name: "ac/dc",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "action bronson",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "adam freeland",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "alabama shakes",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "alchemy",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "alesso",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "alf alpha",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "alison wonderland",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "allah-las",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "alt-j",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "alvin risk",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "andrea oliva",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "andrew luce",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "andrew mcmahon in the wilderness",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "angel olsen",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "angus & julia stone",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "annie mac",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "antemasque",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "astronautica",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "atish",
    },
    {
        venue: "outdoor theatre",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "axwell ^ ingrosso",
    },
    {
        venue: "coachella",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "azealia banks",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "bad religion",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "bad suns",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "belle and sebastian",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "ben klock",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "benjamin booker",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "bixel boys",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "brand new",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "brant bjork & the low desert punk band",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "built to spill",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "caribou",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "carl craig",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "cashmere cat",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "cedric gervais",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "charles bradley and his extraordinaires",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "chet faker",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "chicano batman",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "chris malinchak",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "circa survive",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "claude vonstroke",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "clean bandit",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "cloud nothings",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "coasts",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "crnkn",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "dance spirit",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "danny tenaglia",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "david guetta",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "dem ham boyz",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "deorro",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "desaparecidos",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "dirty south",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "dj harvey",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "dj snake",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "djp",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "doc martin feat. sublevel live",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "dr. fresch",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "drake",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "drive like jehu",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "duke dumont",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "eagulls",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "erol alkan",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "father john misty",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "fitz & the tantrums",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "fka twigs",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "florence + the machine",
    },
    {
        venue: "outdoor theatre",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "flosstradamus",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "flying lotus",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "freddy be",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "gabe real",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "george ezra",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "gesaffelstein",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "glass animals",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "goldrush",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "gorgon city",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "gramatik",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "guy gerber",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "haerts",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "hoodboi",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "hot natured",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "hozier",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "hunter leggitt",
    },
    {
        venue: "coachella",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "interpol",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "j. phlip",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "j.e.s.+s. (jackmaster, eats everything, skream & seth troxler)",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "jack white",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "jamestown revival",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "jamie xx",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "jason bentley",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "jenny lewis",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "jesse wright",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "jimbo jenkins",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "john talabot dj set",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "jon hopkins",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "joyce manor",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "jungle",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "kasabian",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "kaskade",
    },
    {
        venue: "gobi",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "kaytranada",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "keys n krates",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "kiesza",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "kimbra",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "kraddy",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "kygo",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "lauren lane",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "lee foss",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "lights",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "lil b",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "lisbona",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "little red spiders",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "loco dice",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "los rakas",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "louis futon",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "lucent dossier experience",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "lykke li",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "mac demarco",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "madeon",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "mantastique",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "marina and the diamonds",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "marques wyatt",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "martin solveig",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "matthew koma",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "mø",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "mija",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "milky chance",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "mk",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "mor elian",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "morillo",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "moustache",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "my favorite robot",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "nero",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "new world punx",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "night terrors of 1927",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "nortec collective presents: bostich + fussible",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "odesza",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "off!",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "oliver heldens",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "panda bear",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "parquet courts",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "patricio",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "peking duk",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "perfume genius",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "pete tong",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "philip selway",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "phox",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "pomo",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "porter robinson",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "r3hab",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "rac",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "radkey",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "raekwon and ghostface killah",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "ratatat",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "reverend horton heat",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "ride",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "robot koch",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "royal blood",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "ruen brothers",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "run the jewels",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "ryan adams",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "ryan hemsworth",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "ryn weaver",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "sabo",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "saint motel",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "sbtrkt",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "sloan",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "soslo",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "squarepusher",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "st. lucia",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "st. paul and the broken bones",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "st. vincent",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "steely dan",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "stromae",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "sturgill simpson",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "superduperbrick",
    },
    {
        venue: "gobi",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "swans",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "sylvan esso",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "tale of us",
    },
    {
        venue: "coachella",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "tame impala",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "tastytreat",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "the cribs",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "the gaslamp killer experience",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "the ghost of a saber tooth tiger",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "the orwells",
    },
    {
        venue: "coachella",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "the war on drugs",
    },
    {
        venue: "coachella",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "the weeknd",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "tiger and woods",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "tini",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "todd terje and the olsens",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "toro y moi",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "touche amore",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "tourist",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "trent cantrelle",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "trippy turtle",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "tropicool",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "tycho",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "tyler the creator",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "until the ribbon breaks",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "vance joy",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "vic mensa",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "what so not",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "whitehorse",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "worthy",
    },
    {
        venue: "",
        start: new Date(2015, 3, 15, 10, 45),
        end: new Date(2015, 3, 15, 11, 45),
        name: "yelle",
    }
];


var coachella2 = [
    {
        name: "Ian Testing",
        start: new Date(2014, 3, 18, 20, 45),
        venue: "Do Lab",
        endTime: new Date(2016, 3, 18, 21, 45)
    },
    {
        name: "Ian Testing tomorrow",
        start: new Date(2015, 3, 10, 20, 45),
        venue: "Do Lab",
        endTime: new Date(2015, 3, 10, 21, 45),
    },
    {
        name: "Ian Today",
        start: new Date(2015, 3, 10, 20, 45),
        venue: "Do Lab",
        endTime: new Date(2015, 3, 10, 21, 45),
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/l/u/f/atribecalledred.jpg",
        name: "A Tribe Called Red",
        start: new Date(2015, 3, 18, 20, 45),
        venue: "Do Lab",
        endTime: new Date(2015, 3, 18, 21, 45)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/absoul_900x900.jpg",
        name: "Ab-Soul",
        start: new Date(2015, 3, 17, 15, 00),
        venue: "Gobi",
        endTime: new Date(2015, 3, 17, 16, 00)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/acdc_850x850.jpg",
        name: "AC/DC",
        start: new Date(2015, 3, 17, 22, 35),
        venue: "Coachella",
        endTime: new Date(2015, 3, 17, 23, 35)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/actionbronson_1280x1280.jpg",
        name: "Action Bronson",
        start: new Date(2015, 3, 17, 14, 30),
        venue: "Coachella",
        endTime: new Date(2015, 3, 17, 15, 30)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/v/x/b/adamfreeland.jpg",
        name: "Adam Freeland",
        start: new Date(2015, 3, 18, 23, 30),
        venue: "Do Lab",
        endTime: new Date(2015, 3, 18, 24, 30)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/alabamashakes_1000x1000.jpg",
        name: "Alabama Shakes",
        start: new Date(2015, 3, 17, 19, 00),
        venue: "Outdoor",
        endTime: new Date(2015, 3, 17, 20, 00)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/z/z/e/alchemy1000.jpg",
        name: "Alchemy",
        start: new Date(2015, 3, 17, 11, 15),
        venue: "Outdoor",
        endTime: new Date(2015, 3, 17, 12, 15)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/alesso_1280x1280.jpg",
        name: "Alesso",
        start: new Date(2015, 3, 17, 23, 35),
        venue: "Sahara",
        endTime: new Date(2015, 3, 17, 24, 35)
    },{name: "Alf Alpha",
        start: new Date(2015, 3, 19, 13, 20),
        venue: "Sahara",
        endTime: new Date(2015, 3, 19, 14, 20)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/alisonwonderland_800x800.jpg",
        name: "Alison Wonderland",
        start: new Date(2015, 3, 18, 14, 30),
        venue: "Sahara",
        endTime: new Date(2015, 3, 18, 15, 30)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/allahlas_1280x1280.jpg",
        name: "Allah-Las",
        start: new Date(2015, 3, 17, 14, 10),
        venue: "Outdoor",
        endTime: new Date(2015, 3, 17, 15, 10)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/altj_1000x1000.jpg",
        name: "alt-J",
        start: new Date(2015, 3, 18, 19, 30),
        venue: "Coachella",
        endTime: new Date(2015, 3, 18, 20, 30)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/alvinrisk_900x900.jpg",
        name: "Alvin Risk",
        start: new Date(2015, 3, 17, 15, 40),
        venue: "Sahara",
        endTime: new Date(2015, 3, 17, 16, 40)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/andreaolivia_650x650.jpg",
        name: "Andrea Oliva",
        start: new Date(2015, 3, 18, 15, 10),
        venue: "Yuma",
        endTime: new Date(2015, 3, 18, 16, 10)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/w/a/d/andrewluce.jpg",
        name: "Andrew Luce",
        start: new Date(2015, 3, 18, 12, 00),
        venue: "Do Lab",
        endTime: new Date(2015, 3, 18, 13, 00)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/andrewmcmahon_800x800.jpg",
        name: "Andrew McMahon in the Wilderness",
        start: new Date(2015, 3, 18, 16, 05),
        venue: "Outdoor",
        endTime: new Date(2015, 3, 18, 17, 05)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/angelolsen_1000x1000.jpg",
        name: "Angel Olsen",
        start: new Date(2015, 3, 19, 13, 25),
        venue: "Gobi",
        endTime: new Date(2015, 3, 19, 14, 25)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/angusandjuliastone_900x900.jpg",
        name: "Angus &amp; Julia Stone",
        start: new Date(2015, 3, 17, 16, 25),
        venue: "Outdoor",
        endTime: new Date(2015, 3, 17, 17, 25)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/anniemac_750x750.jpg",
        name: "Annie Mac",
        start: new Date(2015, 3, 18, 23, 45),
        venue: "Yuma",
        endTime: new Date(2015, 3, 18, 24, 45)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/antemasque_950x950.jpg",
        name: "Antemasque",
        start: new Date(2015, 3, 18, 00, 05),
        venue: "Mojave",
        endTime: new Date(2015, 3, 18, 1, 05)
    },{name: "Astronautica",
        start: new Date(2015, 3, 19, 11, 50),
        venue: "Gobi",
        endTime: new Date(2015, 3, 19, 12, 50)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/x/r/a/atish.jpg",
        name: "Atish",
        start: new Date(2015, 3, 17, 21, 15),
        venue: "Do Lab",
        endTime: new Date(2015, 3, 17, 22, 15)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/axwell_600x600.jpg",
        name: "Axwell ^ Ingrosso",
        start: new Date(2015, 3, 18, 23, 55),
        venue: "Outdoor",
        endTime: new Date(2015, 3, 18, 24, 55)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/azealiabanks_800x800.jpg",
        name: "Azealia Banks",
        start: new Date(2015, 3, 17, 17, 00),
        venue: "Coachella",
        endTime: new Date(2015, 3, 17, 18, 00)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/badreligion_950x950.jpg",
        name: "Bad Religion",
        start: new Date(2015, 3, 18, 15, 25),
        venue: "Coachella",
        endTime: new Date(2015, 3, 18, 16, 25)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/badsuns_1280x1280.jpg",
        name: "Bad Suns",
        start: new Date(2015, 3, 18, 15, 20),
        venue: "Mojave",
        endTime: new Date(2015, 3, 18, 16, 20)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/belleandsebastian_1280x1280.jpg",
        name: "Belle and Sebastian",
        start: new Date(2015, 3, 18, 18, 40),
        venue: "Outdoor",
        endTime: new Date(2015, 3, 18, 19, 40)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/benjaminbooker_1280x1280.jpg",
        name: "Ben Klock",
        start: new Date(2015, 3, 19, 18, 35),
        venue: "Yuma",
        endTime: new Date(2015, 3, 19, 19, 35)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/benklock_900x900.jpg",
        name: "Benjamin Booker",
        start: new Date(2015, 3, 18, 15, 40),
        venue: "Gobi",
        endTime: new Date(2015, 3, 18, 16, 40)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/bixelboys_1280x1280.jpg",
        name: "Bixel Boys",
        start: new Date(2015, 3, 18, 12, 20),
        venue: "Sahara",
        endTime: new Date(2015, 3, 18, 13, 20)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/brandnew_800x800.jpg",
        name: "Brand New",
        start: new Date(2015, 3, 19, 18, 40),
        venue: "Mojave",
        endTime: new Date(2015, 3, 19, 19, 40)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/brantbjork_1280x1280.jpg",
        name: "Brant Bjork &amp; The Low Desert Punk Band",
        start: new Date(2015, 3, 17, 13, 00),
        venue: "Outdoor",
        endTime: new Date(2015, 3, 17, 14, 00)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/builttospill_1280x1280.jpg",
        name: "Built to Spill",
        start: new Date(2015, 3, 19, 16, 15),
        venue: "Outdoor",
        endTime: new Date(2015, 3, 19, 17, 15)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/caribou_650x650.jpg",
        name: "Caribou",
        start: new Date(2015, 3, 17, 20, 40),
        venue: "Mojave",
        endTime: new Date(2015, 3, 17, 21, 40)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/carlcraig_1280x1280.jpg",
        name: "Carl Craig",
        start: new Date(2015, 3, 18, 17, 30),
        venue: "Yuma",
        endTime: new Date(2015, 3, 18, 18, 30)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/cashmerecat_1280x1280.jpg",
        name: "Cashmere Cat",
        start: new Date(2015, 3, 18, 16, 45),
        venue: "Gobi",
        endTime: new Date(2015, 3, 18, 17, 45)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/cedricgervais_850x850.jpg",
        name: "Cedric Gervais",
        start: new Date(2015, 3, 18, 19, 05),
        venue: "Sahara",
        endTime: new Date(2015, 3, 18, 20, 05)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/charlesbradley_1280x1280.jpg",
        name: "Charles Bradley and His Extraordinaires",
        start: new Date(2015, 3, 17, 15, 45),
        venue: "Coachella",
        endTime: new Date(2015, 3, 17, 16, 45)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/chetfaker_1280x1280.jpg",
        name: "Chet Faker",
        start: new Date(2015, 3, 18, 17, 10),
        venue: "Outdoor",
        endTime: new Date(2015, 3, 18, 18, 10)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/chicanobatman_1280x1280.jpg",
        name: "Chicano Batman",
        start: new Date(2015, 3, 19, 13, 00),
        venue: "Outdoor",
        endTime: new Date(2015, 3, 19, 14, 00)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/chrismalinchak_900x900.jpg",
        name: "Chris Malinchak",
        start: new Date(2015, 3, 17, 20, 35),
        venue: "Yuma",
        endTime: new Date(2015, 3, 17, 21, 35)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/circasurvive_1280x1280.jpg",
        name: "Circa Survive",
        start: new Date(2015, 3, 19, 15, 20),
        venue: "Coachella",
        endTime: new Date(2015, 3, 19, 16, 20)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/claudevonstroke_1280x1280.jpg",
        name: "Claude VonStroke",
        start: new Date(2015, 3, 19, 14, 20),
        venue: "Sahara",
        endTime: new Date(2015, 3, 19, 15, 20)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/cleanbandit_1280x1280.jpg",
        name: "Clean Bandit",
        start: new Date(2015, 3, 18, 14, 15),
        venue: "Coachella",
        endTime: new Date(2015, 3, 18, 15, 15)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/cloudnothings_1000x1000.jpg",
        name: "Cloud Nothings",
        start: new Date(2015, 3, 17, 13, 55),
        venue: "Gobi",
        endTime: new Date(2015, 3, 17, 14, 55)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/coasts_950x950.jpg",
        name: "Coasts",
        start: new Date(2015, 3, 18, 12, 35),
        venue: "Gobi",
        endTime: new Date(2015, 3, 18, 13, 35)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/x/i/e/crnkn.jpg",
        name: "CRNKN",
        start: new Date(2015, 3, 18, 19, 30),
        venue: "Do Lab",
        endTime: new Date(2015, 3, 18, 20, 30)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/p/o/o/dancespirit.jpg",
        name: "Dance Spirit",
        start: new Date(2015, 3, 19, 16, 00),
        venue: "Do Lab",
        endTime: new Date(2015, 3, 19, 17, 00)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/dannytenaglia_1280x1280.jpg",
        name: "Danny Tenaglia",
        start: new Date(2015, 3, 18, 18, 50),
        venue: "Yuma",
        endTime: new Date(2015, 3, 18, 19, 50)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/davidguetta_1280x1280.jpg",
        name: "David Guetta",
        start: new Date(2015, 3, 19, 21, 00),
        venue: "Sahara",
        endTime: new Date(2015, 3, 19, 22, 00)
    },{name: "Dem Ham Boyz",
        start: new Date(2015, 3, 18, 11, 30),
        venue: "Sahara",
        endTime: new Date(2015, 3, 18, 12, 30)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/deorro_1280x1280.jpg",
        name: "Deorro",
        start: new Date(2015, 3, 18, 21, 45),
        venue: "Sahara",
        endTime: new Date(2015, 3, 18, 22, 45)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/desaparecidos_1280x1280.jpg",
        name: "Desaparecidos",
        start: new Date(2015, 3, 19, 16, 35),
        venue: "Gobi",
        endTime: new Date(2015, 3, 19, 17, 35)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/a/b/q/dirtysouth1000.jpg",
        name: "Dirty South",
        start: new Date(2015, 3, 18, 17, 55),
        venue: "Sahara",
        endTime: new Date(2015, 3, 18, 18, 55)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/djharvey_600x600.jpg",
        name: "DJ Harvey",
        start: new Date(2015, 3, 18, 20, 30),
        venue: "Yuma",
        endTime: new Date(2015, 3, 18, 21, 30)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/djsnake_1280x1280.jpg",
        name: "DJ Snake",
        start: new Date(2015, 3, 17, 20, 30),
        venue: "Sahara",
        endTime: new Date(2015, 3, 17, 21, 30)
    },{name: "DJP",
        start: new Date(2015, 3, 17, 11, 30),
        venue: "Sahara",
        endTime: new Date(2015, 3, 17, 12, 30)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/docmartin_700x700.jpg",
        name: "Doc Martin feat. Sublevel Live",
        start: new Date(2015, 3, 19, 12, 30),
        venue: "Yuma",
        endTime: new Date(2015, 3, 19, 13, 30)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/z/v/r/drfresch.jpg",
        name: "Dr. Fresch",
        start: new Date(2015, 3, 17, 23, 45),
        venue: "Do Lab",
        endTime: new Date(2015, 3, 17, 24, 45)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/drake_750x750.jpg",
        name: "Drake",
        start: new Date(2015, 3, 19, 22, 15),
        venue: "Coachella",
        endTime: new Date(2015, 3, 19, 23, 15)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/drivelikejehu_400x400.jpg",
        name: "Drive Like Jehu",
        start: new Date(2015, 3, 18, 22, 50),
        venue: "Gobi",
        endTime: new Date(2015, 3, 18, 23, 50)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/dukedumont_650x650.jpg",
        name: "Duke Dumont",
        start: new Date(2015, 3, 18, 20, 20),
        venue: "Sahara",
        endTime: new Date(2015, 3, 18, 21, 20)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/eagulls_700x700.jpg",
        name: "Eagulls",
        start: new Date(2015, 3, 17, 12, 55),
        venue: "Gobi",
        endTime: new Date(2015, 3, 17, 13, 55)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/erolalkan_600x600.jpg",
        name: "Erol Alkan",
        start: new Date(2015, 3, 17, 16, 45),
        venue: "Yuma",
        endTime: new Date(2015, 3, 17, 17, 45)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/fatherjohnmisty_1280x1280.jpg",
        name: "Father John Misty",
        start: new Date(2015, 3, 18, 20, 00),
        venue: "Outdoor",
        endTime: new Date(2015, 3, 18, 21, 00)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/fitzandthetantrums_1280x1280.jpg",
        name: "Fitz &amp; the Tantrums",
        start: new Date(2015, 3, 19, 21, 20),
        venue: "Outdoor",
        endTime: new Date(2015, 3, 19, 22, 20)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/fkatwigs_1000x1000r.jpg",
        name: "FKA twigs",
        start: new Date(2015, 3, 18, 21, 35),
        venue: "Gobi",
        endTime: new Date(2015, 3, 18, 22, 35)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/florencethemachine_500x500.jpg",
        name: "Florence + the Machine",
        start: new Date(2015, 3, 19, 20, 50),
        venue: "Coachella",
        endTime: new Date(2015, 3, 19, 21, 50)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/flosstradamus_1280x1280.jpg",
        name: "Flosstradamus",
        start: new Date(2015, 3, 18, 22, 30),
        venue: "Outdoor",
        endTime: new Date(2015, 3, 18, 23, 30)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/flyinglotus_1280x1280.jpg",
        name: "Flying Lotus",
        start: new Date(2015, 3, 17, 22, 00),
        venue: "Mojave",
        endTime: new Date(2015, 3, 17, 23, 00)
    },{name: "Freddy Be",
        start: new Date(2015, 3, 17, 13, 00),
        venue: "Yuma",
        endTime: new Date(2015, 3, 17, 14, 00)
    },{name: "Gabe Real",
        start: new Date(2015, 3, 19, 12, 00),
        venue: "Outdoor",
        endTime: new Date(2015, 3, 19, 13, 00)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/georgeezra_600x600.jpg",
        name: "George Ezra",
        start: new Date(2015, 3, 17, 14, 35),
        venue: "Mojave",
        endTime: new Date(2015, 3, 17, 15, 35)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/gesaffelstein_1280x1280.jpg",
        name: "Gesaffelstein",
        start: new Date(2015, 3, 19, 21, 20),
        venue: "Mojave",
        endTime: new Date(2015, 3, 19, 22, 20)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/glassanimal_950x950t.jpg",
        name: "Glass Animals",
        start: new Date(2015, 3, 18, 19, 10),
        venue: "Gobi",
        endTime: new Date(2015, 3, 18, 20, 10)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/l/d/h/goldrush.jpg",
        name: "GoldRush",
        start: new Date(2015, 3, 18, 14, 15),
        venue: "Do Lab",
        endTime: new Date(2015, 3, 18, 15, 15)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/gorgoncity_850x850.jpg",
        name: "Gorgon City",
        start: new Date(2015, 3, 17, 20, 05),
        venue: "Gobi",
        endTime: new Date(2015, 3, 17, 21, 05)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/gramatik_600x600.jpg",
        name: "Gramatik",
        start: new Date(2015, 3, 18, 15, 35),
        venue: "Sahara",
        endTime: new Date(2015, 3, 18, 16, 35)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/guygerber_568x568.jpg",
        name: "Guy Gerber",
        start: new Date(2015, 3, 19, 19, 40),
        venue: "Yuma",
        endTime: new Date(2015, 3, 19, 20, 40)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/haerts_750x750.jpg",
        name: "Haerts",
        start: new Date(2015, 3, 17, 12, 30),
        venue: "Mojave",
        endTime: new Date(2015, 3, 17, 13, 30)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/x/u/n/hoodboi.jpg",
        name: "Hoodboi",
        start: new Date(2015, 3, 18, 16, 45),
        venue: "Do Lab",
        endTime: new Date(2015, 3, 18, 17, 45)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/hotnatured_950x950.jpg",
        name: "Hot Natured",
        start: new Date(2015, 3, 17, 18, 45),
        venue: "Gobi",
        endTime: new Date(2015, 3, 17, 19, 45)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/hozier_600x600.jpg",
        name: "Hozier",
        start: new Date(2015, 3, 18, 18, 00),
        venue: "Coachella",
        endTime: new Date(2015, 3, 18, 19, 00)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/w/a/hunterleggitt.jpg",
        name: "Hunter Leggitt",
        start: new Date(2015, 3, 19, 12, 00),
        venue: "Do Lab",
        endTime: new Date(2015, 3, 19, 13, 00)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/interpol_1280x1280.jpg",
        name: "Interpol",
        start: new Date(2015, 3, 17, 19, 25),
        venue: "Coachella",
        endTime: new Date(2015, 3, 17, 20, 25)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/f/j/f/jphlip.jpg",
        name: "J. Phlip",
        start: new Date(2015, 3, 19, 20, 00),
        venue: "Do Lab",
        endTime: new Date(2015, 3, 19, 21, 00)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/GENERIC_COACHELLA_PHOTO_1000x1000.jpg",
        name: "J.E.S.+S. (Jackmaster, Eats Everything, Skream &amp; Seth Trox",
        start: new Date(2015, 3, 19, 21, 00),
        venue: "Yuma",
        endTime: new Date(2015, 3, 19, 22, 00)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/jackwhite_600x600.jpg",
        name: "Jack White",
        start: new Date(2015, 3, 18, 21, 15),
        venue: "Coachella",
        endTime: new Date(2015, 3, 18, 22, 15)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/jamestownrevival_1280x1280.jpg",
        name: "Jamestown Revival",
        start: new Date(2015, 3, 18, 13, 00),
        venue: "Outdoor",
        endTime: new Date(2015, 3, 18, 14, 00)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/jamiexx_1280x1280.jpg",
        name: "Jamie xx",
        start: new Date(2015, 3, 19, 20, 20),
        venue: "Gobi",
        endTime: new Date(2015, 3, 19, 21, 20)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/jasonbentley_950x950.jpg",
        name: "Jason Bentley",
        start: new Date(2015, 3, 19, 17, 35),
        venue: "Yuma",
        endTime: new Date(2015, 3, 19, 18, 35)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/jennylewis_1280x1280.jpg",
        name: "Jenny Lewis",
        start: new Date(2015, 3, 19, 17, 35),
        venue: "Outdoor",
        endTime: new Date(2015, 3, 19, 18, 35)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/o/o/y/jessewright.jpg",
        name: "Jesse Wright",
        start: new Date(2015, 3, 17, 11, 00),
        venue: "Do Lab",
        endTime: new Date(2015, 3, 17, 12, 00)
    },{name: "Jimbo Jenkins",
        start: new Date(2015, 3, 19, 12, 45),
        venue: "Coachella",
        endTime: new Date(2015, 3, 19, 13, 45)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/johntalabot_1000x1000.jpg",
        name: "John Talabot DJ Set",
        start: new Date(2015, 3, 19, 16, 00),
        venue: "Yuma",
        endTime: new Date(2015, 3, 19, 17, 00)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/jonhopkins_1280x1280.jpg",
        name: "Jon Hopkins",
        start: new Date(2015, 3, 17, 18, 00),
        venue: "Yuma",
        endTime: new Date(2015, 3, 17, 19, 00)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/joycemanor_1000x1000.jpg",
        name: "Joyce Manor",
        start: new Date(2015, 3, 19, 14, 00),
        venue: "Outdoor",
        endTime: new Date(2015, 3, 19, 15, 00)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/jungle_1280x1280.jpg",
        name: "Jungle",
        start: new Date(2015, 3, 18, 17, 35),
        venue: "Mojave",
        endTime: new Date(2015, 3, 18, 18, 35)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/kasabian_1280x1280.jpg",
        name: "Kasabian",
        start: new Date(2015, 3, 18, 20, 15),
        venue: "Mojave",
        endTime: new Date(2015, 3, 18, 21, 15)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/kaskade_1280x1280.jpg",
        name: "Kaskade",
        start: new Date(2015, 3, 19, 19, 25),
        venue: "Coachella",
        endTime: new Date(2015, 3, 19, 20, 25)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/katrynada_1000x1000.jpg",
        name: "Kaytranada",
        start: new Date(2015, 3, 19, 22, 45),
        venue: "Gobi",
        endTime: new Date(2015, 3, 19, 23, 45)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/keysnkrates_650x650.jpg",
        name: "Keys N Krates",
        start: new Date(2015, 3, 17, 16, 50),
        venue: "Sahara",
        endTime: new Date(2015, 3, 17, 17, 50)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/Kiesza_800x800.jpg",
        name: "Kiesza",
        start: new Date(2015, 3, 17, 16, 55),
        venue: "Mojave",
        endTime: new Date(2015, 3, 17, 17, 55)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/kimbra_1280x1280.jpg",
        name: "Kimbra",
        start: new Date(2015, 3, 17, 16, 15),
        venue: "Gobi",
        endTime: new Date(2015, 3, 17, 17, 15)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/j/e/k/kraddy.jpg",
        name: "Kraddy",
        start: new Date(2015, 3, 18, 22, 00),
        venue: "Do Lab",
        endTime: new Date(2015, 3, 18, 23, 00)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/kygo_800x800.jpg",
        name: "Kygo",
        start: new Date(2015, 3, 19, 23, 00),
        venue: "Mojave",
        endTime: new Date(2015, 3, 19, 24, 00)
    },{name: "Lauren Lane",
        start: new Date(2015, 3, 18, 14, 10),
        venue: "Yuma",
        endTime: new Date(2015, 3, 18, 15, 10)
    },{name: "Lee Foss",
        start: new Date(2015, 3, 17, 15, 30),
        venue: "Yuma",
        endTime: new Date(2015, 3, 17, 16, 30)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/Lights_900x900.jpg",
        name: "Lights",
        start: new Date(2015, 3, 18, 14, 30),
        venue: "Gobi",
        endTime: new Date(2015, 3, 18, 15, 30)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/lilb_550x550.jpg",
        name: "Lil B",
        start: new Date(2015, 3, 17, 15, 10),
        venue: "Outdoor",
        endTime: new Date(2015, 3, 17, 16, 10)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/k/l/i/lisbona.jpg",
        name: "Lisbona",
        start: new Date(2015, 3, 17, 17, 00),
        venue: "Do Lab",
        endTime: new Date(2015, 3, 17, 18, 00)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/f/m/m/littleredspiders1000.jpg",
        name: "Little Red Spiders",
        start: new Date(2015, 3, 19, 11, 20),
        venue: "Mojave",
        endTime: new Date(2015, 3, 19, 12, 20)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/localdice_950x950.jpg",
        name: "Loco Dice",
        start: new Date(2015, 3, 18, 22, 20),
        venue: "Yuma",
        endTime: new Date(2015, 3, 18, 23, 20)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/losrakas_750x750.jpg",
        name: "Los Rakas",
        start: new Date(2015, 3, 17, 11, 40),
        venue: "Mojave",
        endTime: new Date(2015, 3, 17, 12, 40)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/r/w/louisfuton.jpg",
        name: "Louis Futon",
        start: new Date(2015, 3, 19, 14, 45),
        venue: "Do Lab",
        endTime: new Date(2015, 3, 19, 15, 45)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/m/r/i/lucentdossierexperience.jpg",
        name: "Lucent Dossier Experience",
        start: new Date(2015, 3, 17, 19, 30),
        venue: "Do Lab",
        endTime: new Date(2015, 3, 17, 20, 30)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/lykkeli_750x750.jpg",
        name: "Lykke Li",
        start: new Date(2015, 3, 17, 19, 20),
        venue: "Mojave",
        endTime: new Date(2015, 3, 17, 20, 20)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/macdemmarco_400x400.jpg",
        name: "Mac DeMarco",
        start: new Date(2015, 3, 19, 15, 05),
        venue: "Outdoor",
        endTime: new Date(2015, 3, 19, 16, 05)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/Madeon_1280x1280.jpg",
        name: "Madeon",
        start: new Date(2015, 3, 19, 18, 20),
        venue: "Sahara",
        endTime: new Date(2015, 3, 19, 19, 20)
    },{name: "Mantastique",
        start: new Date(2015, 3, 18, 11, 00),
        venue: "Outdoor",
        endTime: new Date(2015, 3, 18, 12, 00)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/marinaandthediamonds_1280x1280.jpg",
        name: "Marina and the Diamonds",
        start: new Date(2015, 3, 19, 17, 45),
        venue: "Coachella",
        endTime: new Date(2015, 3, 19, 18, 45)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/marqueswyatt_1280x1280.jpg",
        name: "Marques Wyatt",
        start: new Date(2015, 3, 17, 14, 15),
        venue: "Yuma",
        endTime: new Date(2015, 3, 17, 15, 15)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/MartinSolveig_950x950.jpg",
        name: "Martin Solveig",
        start: new Date(2015, 3, 19, 16, 50),
        venue: "Sahara",
        endTime: new Date(2015, 3, 19, 17, 50)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/matthewkoma_500x500.jpg",
        name: "Matthew Koma",
        start: new Date(2015, 3, 18, 13, 25),
        venue: "Sahara",
        endTime: new Date(2015, 3, 18, 14, 25)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/s/b/p/mo1000.jpg",
        name: "MÃ˜",
        start: new Date(2015, 3, 19, 14, 25),
        venue: "Gobi",
        endTime: new Date(2015, 3, 19, 15, 25)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/m/e/x/mija.jpg",
        name: "Mija",
        start: new Date(2015, 3, 17, 18, 15),
        venue: "Do Lab",
        endTime: new Date(2015, 3, 17, 19, 15)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/milkychance_1280x1280.jpg",
        name: "Milky Chance",
        start: new Date(2015, 3, 18, 16, 40),
        venue: "Coachella",
        endTime: new Date(2015, 3, 18, 17, 40)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/mk_1280x1280.jpg",
        name: "MK",
        start: new Date(2015, 3, 17, 22, 05),
        venue: "Yuma",
        endTime: new Date(2015, 3, 17, 23, 05)
    },{name: "Mor Elian",
        start: new Date(2015, 3, 18, 13, 00),
        venue: "Yuma",
        endTime: new Date(2015, 3, 18, 14, 00)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/t/w/n/morillo.jpg",
        name: "Morillo",
        start: new Date(2015, 3, 19, 13, 30),
        venue: "Do Lab",
        endTime: new Date(2015, 3, 19, 14, 30)
    },{name: "Moustache",
        start: new Date(2015, 3, 17, 11, 15),
        venue: "Gobi",
        endTime: new Date(2015, 3, 17, 12, 15)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/s/m/j/myfavoriterobot.jpg",
        name: "My Favorite Robot",
        start: new Date(2015, 3, 17, 22, 30),
        venue: "Do Lab",
        endTime: new Date(2015, 3, 17, 23, 30)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/e/n/q/nero1200x1200.jpg",
        name: "Nero",
        start: new Date(2015, 3, 17, 21, 35),
        venue: "Outdoor",
        endTime: new Date(2015, 3, 17, 22, 35)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/newworldpunx_900x900.jpg",
        name: "New World Punx",
        start: new Date(2015, 3, 19, 19, 35),
        venue: "Sahara",
        endTime: new Date(2015, 3, 19, 20, 35)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/nightterrorsof1927_640x640.jpg",
        name: "Night Terrors of 1927",
        start: new Date(2015, 3, 19, 12, 30),
        venue: "Gobi",
        endTime: new Date(2015, 3, 19, 13, 30)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/norteccollective_700x700.jpg",
        name: "Nortec Collective Presents: Bostich + Fussible",
        start: new Date(2015, 3, 18, 13, 00),
        venue: "Coachella",
        endTime: new Date(2015, 3, 18, 14, 00)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/odesza_1280x1280.jpg",
        name: "ODESZA",
        start: new Date(2015, 3, 19, 21, 35),
        venue: "Gobi",
        endTime: new Date(2015, 3, 19, 22, 35)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/off_600x600.jpg",
        name: "OFF!",
        start: new Date(2015, 3, 19, 14, 00),
        venue: "Mojave",
        endTime: new Date(2015, 3, 19, 15, 00)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/oliverheldens_600x600.jpg",
        name: "Oliver Heldens",
        start: new Date(2015, 3, 17, 18, 00),
        venue: "Sahara",
        endTime: new Date(2015, 3, 17, 19, 00)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/pandabear_1280x1280.jpg",
        name: "Panda Bear",
        start: new Date(2015, 3, 19, 14, 55),
        venue: "Mojave",
        endTime: new Date(2015, 3, 19, 15, 55)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/parquetcourts_900x900.jpg",
        name: "Parquet Courts",
        start: new Date(2015, 3, 18, 13, 25),
        venue: "Gobi",
        endTime: new Date(2015, 3, 18, 14, 25)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/o/z/s/patricio.jpg",
        name: "Patricio",
        start: new Date(2015, 3, 17, 14, 30),
        venue: "Do Lab",
        endTime: new Date(2015, 3, 17, 15, 30)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/s/h/v/pekingduk640x640.jpg",
        name: "Peking Duk",
        start: new Date(2015, 3, 17, 13, 20),
        venue: "Sahara",
        endTime: new Date(2015, 3, 17, 14, 20)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/perfumegenius_1280x1280.jpg",
        name: "Perfume Genius",
        start: new Date(2015, 3, 18, 13, 55),
        venue: "Outdoor",
        endTime: new Date(2015, 3, 18, 14, 55)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/petetong_1280x1280.jpg",
        name: "Pete Tong",
        start: new Date(2015, 3, 17, 19, 15),
        venue: "Yuma",
        endTime: new Date(2015, 3, 17, 20, 15)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/philipselway_650x650.jpg",
        name: "Philip Selway",
        start: new Date(2015, 3, 19, 19, 10),
        venue: "Gobi",
        endTime: new Date(2015, 3, 19, 20, 10)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/phox_1280x1280.jpg",
        name: "Phox",
        start: new Date(2015, 3, 18, 12, 00),
        venue: "Outdoor",
        endTime: new Date(2015, 3, 18, 13, 00)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/y/x/x/pomo.jpg",
        name: "Pomo",
        start: new Date(2015, 3, 19, 17, 15),
        venue: "Do Lab",
        endTime: new Date(2015, 3, 19, 18, 15)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/porterrobinson_1280x1280.jpg",
        name: "Porter Robinson",
        start: new Date(2015, 3, 17, 22, 00),
        venue: "Sahara",
        endTime: new Date(2015, 3, 17, 23, 00)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/r3hab_1280x1280.jpg",
        name: "R3hab",
        start: new Date(2015, 3, 17, 19, 10),
        venue: "Sahara",
        endTime: new Date(2015, 3, 17, 20, 10)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/rac_500x500.jpg",
        name: "RAC",
        start: new Date(2015, 3, 19, 16, 10),
        venue: "Mojave",
        endTime: new Date(2015, 3, 19, 17, 10)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/radkey_1000x1000.jpg",
        name: "Radkey",
        start: new Date(2015, 3, 18, 11, 35),
        venue: "Mojave",
        endTime: new Date(2015, 3, 18, 12, 35)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/raekwonghostfacekillah_1000x1000.jpg",
        name: "Raekwon and Ghostface Killah",
        start: new Date(2015, 3, 17, 17, 45),
        venue: "Outdoor",
        endTime: new Date(2015, 3, 17, 18, 45)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/ratatat_1280x1280.jpg",
        name: "Ratatat",
        start: new Date(2015, 3, 18, 23, 15),
        venue: "Sahara",
        endTime: new Date(2015, 3, 18, 24, 15)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/reverendhortonheat_1280x1280.jpg",
        name: "Reverend Horton Heat",
        start: new Date(2015, 3, 17, 13, 30),
        venue: "Mojave",
        endTime: new Date(2015, 3, 17, 14, 30)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/ride_600x600.jpg",
        name: "Ride",
        start: new Date(2015, 3, 17, 17, 25),
        venue: "Gobi",
        endTime: new Date(2015, 3, 17, 18, 25)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/b/a/a/robotkoch.jpg",
        name: "Robot Koch",
        start: new Date(2015, 3, 18, 15, 30),
        venue: "Do Lab",
        endTime: new Date(2015, 3, 18, 16, 30)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/royalblood_1000x1000.jpg",
        name: "Royal Blood",
        start: new Date(2015, 3, 18, 15, 00),
        venue: "Outdoor",
        endTime: new Date(2015, 3, 18, 16, 00)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/ruenbrothers_1000x1000.jpg",
        name: "Ruen Brothers",
        start: new Date(2015, 3, 17, 12, 00),
        venue: "Gobi",
        endTime: new Date(2015, 3, 17, 13, 00)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/runthejewels_1280x1280.jpg",
        name: "Run the Jewels",
        start: new Date(2015, 3, 18, 18, 55),
        venue: "Mojave",
        endTime: new Date(2015, 3, 18, 19, 55)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/ryanadams_800x800.jpg",
        name: "Ryan Adams",
        start: new Date(2015, 3, 19, 18, 35),
        venue: "Outdoor",
        endTime: new Date(2015, 3, 19, 19, 35)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/ryanhemsworth_1280x1280.jpg",
        name: "Ryan Hemsworth",
        start: new Date(2015, 3, 17, 18, 05),
        venue: "Mojave",
        endTime: new Date(2015, 3, 17, 19, 05)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/rynweaver_640x640.jpg",
        name: "Ryn Weaver",
        start: new Date(2015, 3, 18, 13, 15),
        venue: "Mojave",
        endTime: new Date(2015, 3, 18, 14, 15)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/k/h/w/sabo.jpg",
        name: "Sabo",
        start: new Date(2015, 3, 17, 15, 45),
        venue: "Do Lab",
        endTime: new Date(2015, 3, 17, 16, 45)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/saintmotel_600x600.jpg",
        name: "Saint Motel",
        start: new Date(2015, 3, 19, 13, 20),
        venue: "Coachella",
        endTime: new Date(2015, 3, 19, 14, 20)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/SBTRKT_1000x1000.jpg",
        name: "SBTRKT",
        start: new Date(2015, 3, 18, 22, 50),
        venue: "Mojave",
        endTime: new Date(2015, 3, 18, 23, 50)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/sloan_1000x1000.jpg",
        name: "Sloan",
        start: new Date(2015, 3, 19, 12, 00),
        venue: "Mojave",
        endTime: new Date(2015, 3, 19, 13, 00)
    },{name: "Soslo",
        start: new Date(2015, 3, 19, 11, 30),
        venue: "Sahara",
        endTime: new Date(2015, 3, 19, 12, 30)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/squarepusher_800x800.jpg",
        name: "Squarepusher",
        start: new Date(2015, 3, 17, 22, 50),
        venue: "Gobi",
        endTime: new Date(2015, 3, 17, 23, 50)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/stlucia_1280x1280.jpg",
        name: "St. Lucia",
        start: new Date(2015, 3, 19, 16, 30),
        venue: "Coachella",
        endTime: new Date(2015, 3, 19, 17, 30)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/stpaulandthebrokenbones_1280x1280.jpg",
        name: "St. Paul and the Broken Bones",
        start: new Date(2015, 3, 18, 14, 20),
        venue: "Mojave",
        endTime: new Date(2015, 3, 18, 15, 20)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/stvincent_1280x1280.jpg",
        name: "St. Vincent",
        start: new Date(2015, 3, 19, 20, 00),
        venue: "Outdoor",
        endTime: new Date(2015, 3, 19, 21, 00)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/steelydan_600x600.jpg",
        name: "Steely Dan",
        start: new Date(2015, 3, 17, 20, 15),
        venue: "Outdoor",
        endTime: new Date(2015, 3, 17, 21, 15)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/stromae_1280x1280.jpg",
        name: "Stromae",
        start: new Date(2015, 3, 19, 20, 00),
        venue: "Mojave",
        endTime: new Date(2015, 3, 19, 21, 00)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/sturgillsimpson_1280x1280.jpg",
        name: "Sturgill Simpson",
        start: new Date(2015, 3, 19, 15, 25),
        venue: "Gobi",
        endTime: new Date(2015, 3, 19, 16, 25)
    },{name: "superduperbrick",
        start: new Date(2015, 3, 19, 12, 30),
        venue: "Sahara",
        endTime: new Date(2015, 3, 19, 13, 30)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/swans_720x720.jpg",
        name: "Swans",
        start: new Date(2015, 3, 18, 12, 05),
        venue: "Gobi",
        endTime: new Date(2015, 3, 18, 13, 05)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/sylvanesso_1280x1280.jpg",
        name: "Sylvan Esso",
        start: new Date(2015, 3, 17, 15, 40),
        venue: "Mojave",
        endTime: new Date(2015, 3, 17, 16, 40)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/taleofus_1280x1280.jpg",
        name: "Tale of Us",
        start: new Date(2015, 3, 18, 16, 20),
        venue: "Yuma",
        endTime: new Date(2015, 3, 18, 17, 20)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/tameimpala_1280x1280.jpg",
        name: "Tame Impala",
        start: new Date(2015, 3, 17, 21, 15),
        venue: "Coachella",
        endTime: new Date(2015, 3, 17, 22, 15)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/c/w/y/tastytreat.jpg",
        name: "TastyTreat",
        start: new Date(2015, 3, 18, 13, 00),
        venue: "Do Lab",
        endTime: new Date(2015, 3, 18, 14, 00)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/thecribs_1280x1280.jpg",
        name: "The Cribs",
        start: new Date(2015, 3, 19, 18, 05),
        venue: "Gobi",
        endTime: new Date(2015, 3, 19, 19, 05)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/thegaslampkillerexperience_1280x1280.jpg",
        name: "The Gaslamp Killer Experience",
        start: new Date(2015, 3, 18, 20, 20),
        venue: "Gobi",
        endTime: new Date(2015, 3, 18, 21, 20)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/d/m/w/goasttc2015.jpg",
        name: "The Ghost of a Saber Tooth Tiger",
        start: new Date(2015, 3, 17, 12, 00),
        venue: "Outdoor",
        endTime: new Date(2015, 3, 17, 13, 00)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/theorwells_900x900.jpg",
        name: "The Orwells",
        start: new Date(2015, 3, 19, 14, 20),
        venue: "Coachella",
        endTime: new Date(2015, 3, 19, 15, 20)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/thewarondrugs_1280x1280.jpg",
        name: "The War on Drugs",
        start: new Date(2015, 3, 17, 18, 10),
        venue: "Coachella",
        endTime: new Date(2015, 3, 17, 19, 10)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/theweeknd600x600.jpg",
        name: "The Weeknd",
        start: new Date(2015, 3, 18, 23, 25),
        venue: "Coachella",
        endTime: new Date(2015, 3, 18, 24, 25)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/tigerandwoods_1280x1280.jpg",
        name: "Tiger and Woods",
        start: new Date(2015, 3, 19, 14, 40),
        venue: "Yuma",
        endTime: new Date(2015, 3, 19, 15, 40)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/tini_900x900.jpg",
        name: "tINI",
        start: new Date(2015, 3, 19, 13, 25),
        venue: "Yuma",
        endTime: new Date(2015, 3, 19, 14, 25)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/toddterjeandtheolsens_1280x1280.jpg",
        name: "Todd Terje and the Olsens",
        start: new Date(2015, 3, 17, 21, 20),
        venue: "Gobi",
        endTime: new Date(2015, 3, 17, 22, 20)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/toroymoi_1280x1280.jpg",
        name: "Toro y Moi",
        start: new Date(2015, 3, 18, 16, 20),
        venue: "Mojave",
        endTime: new Date(2015, 3, 18, 17, 20)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/toucheamore_1280x1280.jpg",
        name: "Touche Amore",
        start: new Date(2015, 3, 19, 13, 00),
        venue: "Mojave",
        endTime: new Date(2015, 3, 19, 14, 00)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/tourist_1280x1280.jpg",
        name: "Tourist",
        start: new Date(2015, 3, 18, 12, 20),
        venue: "Mojave",
        endTime: new Date(2015, 3, 18, 13, 20)
    },{name: "Trent Cantrelle",
        start: new Date(2015, 3, 19, 11, 30),
        venue: "Yuma",
        endTime: new Date(2015, 3, 19, 12, 30)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/t/n/c/trippyturtle1180x1180.jpg",
        name: "Trippy Turtle",
        start: new Date(2015, 3, 17, 14, 30),
        venue: "Sahara",
        endTime: new Date(2015, 3, 17, 15, 30)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/j/v/o/tropicool1000.jpg",
        name: "Tropicool",
        start: new Date(2015, 3, 17, 13, 15),
        venue: "Do Lab",
        endTime: new Date(2015, 3, 17, 14, 15)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/tycho_1280x1280.jpg",
        name: "Tycho",
        start: new Date(2015, 3, 18, 21, 30),
        venue: "Mojave",
        endTime: new Date(2015, 3, 18, 22, 30)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/tylerthecreator_600x600.jpg",
        name: "Tyler The Creator",
        start: new Date(2015, 3, 18, 21, 15),
        venue: "Outdoor",
        endTime: new Date(2015, 3, 18, 22, 15)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/untiltheribbonbreaks_1280x1280.jpg",
        name: "Until the Ribbon Breaks",
        start: new Date(2015, 3, 18, 11, 45),
        venue: "Gobi",
        endTime: new Date(2015, 3, 18, 12, 45)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/vancejoy_1280x1280.jpg",
        name: "Vance Joy",
        start: new Date(2015, 3, 19, 17, 30),
        venue: "Mojave",
        endTime: new Date(2015, 3, 19, 18, 30)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/vicmensa_575x575.jpg",
        name: "Vic Mensa",
        start: new Date(2015, 3, 17, 13, 20),
        venue: "Coachella",
        endTime: new Date(2015, 3, 17, 14, 20)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/whatsonot_1280x1280.jpg",
        name: "What So Not",
        start: new Date(2015, 3, 19, 15, 35),
        venue: "Sahara",
        endTime: new Date(2015, 3, 19, 16, 35)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/y/y/a/whitehorse.jpg",
        name: "Whitehorse",
        start: new Date(2015, 3, 17, 12, 00),
        venue: "Do Lab",
        endTime: new Date(2015, 3, 17, 13, 00)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/t/a/worthy.jpg",
        name: "Worthy",
        start: new Date(2015, 3, 19, 18, 30),
        venue: "Do Lab",
        endTime: new Date(2015, 3, 19, 19, 30)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/q/s/j/yelle_1280x1280.jpg",
        name: "Yelle",
        start: new Date(2015, 3, 18, 18, 00),
        venue: "Gobi",
        endTime: new Date(2015, 3, 18, 19, 00)
    },
    {
        imgSrc: "https://gv-account-assets.s3.amazonaws.com/artist-images/u/c/m/yellowclaw1280x1280.jpg",
        name: "Yellow Claw",
        start: new Date(2015, 3, 18, 16, 45),
        venue: "Sahara",
        endTime: new Date(2015, 3, 18, 17, 45)
    }
];
