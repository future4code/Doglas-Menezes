import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        
        <Post
          nomeUsuario={'Studio La Roque'}
          fotoUsuario={"https://scontent.fpoa13-1.fna.fbcdn.net/v/t1.6435-9/153643027_844242866135233_7858621112561118437_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=4sHPMrsoc2kAX9aJP5o&_nc_ht=scontent.fpoa13-1.fna&oh=474226f4396ea14f413ea833c183aed6&oe=60F355A8"}
          fotoPost={"https://scontent.fpoa13-1.fna.fbcdn.net/v/t1.6435-9/186540150_891751831384336_2417503122167078450_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=rZjtgnW59p0AX9RZ26G&_nc_oc=AQlIESIsiHVfaolUL7WiKtQLNi2bQLr5mBaCYc3Z5LC3S_Nj-clwk0jRjnhmWyR_QTV5PQSctbsuS4uVXwrO14f4&_nc_ht=scontent.fpoa13-1.fna&oh=4c0bc774237eabbed9814b02422d1a31&oe=60F35C85 "}
        />
        <Post
        nomeUsuario={'Eu sou o Doglas'}
        fotoUsuario={'https://scontent.fpoa13-1.fna.fbcdn.net/v/t1.6435-9/41930294_1351708311630353_889848504254464_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=84a396&_nc_ohc=NxDUTXiFhrYAX-5Oyrh&_nc_ht=scontent.fpoa13-1.fna&oh=a16f1aa9e618bb19b926968ac5e09c8f&oe=60F3580F'}
        fotoPost={'https://scontent.fpoa13-1.fna.fbcdn.net/v/t1.6435-9/101625010_2917512235023844_2247832861631578112_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=84a396&_nc_ohc=RjPz3QAPdIMAX_raeRA&_nc_ht=scontent.fpoa13-1.fna&oh=48599cfe074b20fa5b584af7722658cd&oe=60F406B4'}
      />
      </MainContainer>
    );
  }
}

export default App;
