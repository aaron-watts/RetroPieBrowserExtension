import { Source} from "./_source.js";

const srcElems = document.querySelectorAll('.source');
const sources = [...srcElems].map(src => new Source(src));
