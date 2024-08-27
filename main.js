function App() {
    return (
        <div class="AppCT" style ={{width: '800px', border: '1px solid black', borderRadius: '15px', padding: '20px' }}>
            <ProfileImage/>
            <NameInfo/>
            <DetailPost/>
        </div>
    )
}

function ProfileImage () {
   return (
        <div class="image" style={{textAlign: 'center'}}>
            <img style ={{borderRadius: '50%'}} 
            src="https://images.unsplash.com/photo-1579463148228-138296ac3b98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" />
        </div>
   )
}

function NameInfo () {
    return (
        <div class="Info" style={{textAlign: 'center'}}>
            <h3>Julienne Moore</h3>
            <p style = {{color: 'grey'}}>julienne.moore@company.com</p>
        </div>
    )
}

function DetailPost () {
    return (
        <div class="Post" style={{textAlign: 'center', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <div class="Post1">
                <p>25</p>
                <p style = {{color: 'grey'}}>Posts</p>
            </div>
            <div class="Post2">
                <p>350</p>
                <p style = {{color: 'grey'}}>Following</p>
            </div>
            <div class="Post3">
                <p>1.5k</p>
                <p style = {{color: 'grey'}}> Followers</p>
            </div>
        </div>
    )
}



ReactDOM.createRoot(document.querySelector('#root'))
.render(<App />)