import React, { useRef } from 'react';
import { exportComponentAsPNG } from 'react-component-export-image';
import {
  Container,
  Image,
  ImageContainer,
} from './styles';
import Button from '../../../components/Button';

import gallery1 from '../../../assets/gallery/gallery1.png';
import gallery2 from '../../../assets/gallery/gallery2.png';
import gallery3 from '../../../assets/gallery/gallery3.png';

function Gallery() {
  const refImg1 = useRef();
  const refImg2 = useRef();
  const refImg3 = useRef();
  return (
    <Container>
      <h1>Gallery</h1>
      <ImageContainer>
        <Image>
          <p>
            Original image
          </p>
          <a
            href="https://www.pixilart.com/art/luffy-76df9167bbcb"
            target="_blank"
            rel="noreferrer"
          >
            Here
          </a>
          <img ref={refImg1} src={gallery1} alt="gallery1" />
          <Button
            type="startDraw"
            onClick={() => exportComponentAsPNG(refImg1, { fileName: 'baxel-art-one-piece' })}
          >
            Download
          </Button>
        </Image>
        <Image>
          <p>
            Original image
          </p>
          <a
            href="https://www.pixilart.com/art/fury-bowser-4dc4dfff30a7"
            target="_blank"
            rel="noreferrer"
          >
            Here
          </a>
          <img ref={refImg2} src={gallery2} alt="gallery2" />
          <Button
            type="startDraw"
            onClick={() => exportComponentAsPNG(refImg2, { fileName: 'baxel-art-mario-vs-bowser' })}
          >
            Download
          </Button>
        </Image>
        <Image>
          <p>
            Original image
          </p>
          <a
            href="https://www.pixilart.com/art/supermario-16-0fc7978e035a"
            target="_blank"
            rel="noreferrer"
          >
            Here
          </a>
          <img ref={refImg3} src={gallery3} alt="gallery3" />
          <Button
            type="startDraw"
            onClick={() => exportComponentAsPNG(refImg3, { fileName: 'baxel-art-just-mario' })}
          >
            Download
          </Button>
        </Image>
      </ImageContainer>
    </Container>
  );
}

export default Gallery;
