let {UserList,MoviesList} = require("../data")
const resolvers = {
    Query: {
        users:() => {
            return UserList;
        },
        user: (_,args)=>{
            const id = args.id;
            return UserList.find((item)=> item.id == id)
        },
        movies: () => {
            return MoviesList
        },
        movie: (_,args) => {
            const name = args.name;
            return MoviesList.find((item)=> item.name == name)
        }
    },
    User:{
        favouriteMovies:() =>{
            return MoviesList.filter((item)=> item.year >= 2005)
        }
    },
    Mutation: {
        createUser: (parent, args) =>{
            const user = args.input;
            user.id = UserList[UserList.length-1].id + 1;
            UserList.push(user)
            return user
        },
        updateUser: (parent, args) =>{
            const id = args.input.id;
            console.log(id)
            let updatedUser = {};
            UserList = UserList.map((item)=>{
                if (item.id == id){
                    item.userName = args.input.userName;
                    updatedUser = item;
                }
                return item;
            })
            console.log(updatedUser)
            return updatedUser;
        }
    }
}
module.exports = { resolvers}