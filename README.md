# onboarding-clone

hi! i made this clone to help us learn typescript. it's the same sort of thing as the CRUD challenge we give interview candidates, just tweaked a bit to allow some more exploration.

# things that are in place
this is a create-react-app app, meaning you can just clone it, npm install, and get going!

in terms of code stuff i've provided, when you open the app you'll see a list of musicians along with the instrument they play. under the hood there's `Person` type definitions and stuff you'll find under `types/`, there's a few plain old react components to glue them together under `components/`, and that's...about it!


## what you can do from here
our take-home assignment is creating CRUD functionality, which you should absolutely do. i've included a mock API in `api/` which should provide a decent real-world "make request, get back payload, act on it" flow. i'd encourage you to use this.

other fun stuff to do when that's done include (but are not limited to):
- make the rows display little emoji of the person's instrument
- sort/filter by name or instrument
- expand the `Person` data model to include things like age, living or not, geographic ties, hair color, or anything else you can think of
- expanding to list producers as well as musicians
- idk, connecting to spotify to play a random one of the artist's songs? go wild!
