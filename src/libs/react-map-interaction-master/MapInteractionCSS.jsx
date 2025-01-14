
import MapInteraction from './MapInteraction';
import React, {  useRef } from 'react';

/*
  This component provides a map like interaction to any content that you place in it. It will let
  the user zoom and pan the children by scaling and translating props.children using css.
*/
export const MapInteractionCSS = (props) => {
  const style = {
    height: '100%',
    width: '100%',
    position: 'relative', // for absolutely positioned children
    overflow: 'hidden',
    touchAction: 'none', // Not supported in Safari :(
    msTouchAction: 'none',
    cursor: 'all-scroll',
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    msUserSelect: 'none'
  }

  if (props.disablePan) {
    delete style.cursor;
  }
  const mapRef = useRef(null);



  return (
    <MapInteraction {...props} ref={mapRef}>
      {
        ({ translation, scale }) => {
          // Translate first and then scale.  Otherwise, the scale would affect the translation.
          const transform = `translate(${translation.x}px, ${translation.y}px) scale(${scale})`;
          return (
            <div
              style={style}
            >
              <div
                style={{
                  display: 'inline-block', // size to content
                  transform: transform,
                  transformOrigin: '0 0 '
                }}
              >
                {props.children}
              </div>
            </div>
          );
        }
      }
    </MapInteraction>
  );
};

export default MapInteractionCSS;
