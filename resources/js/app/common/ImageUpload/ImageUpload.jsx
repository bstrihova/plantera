import React from "react";
import ImageUploading from "react-images-uploading";
import Button from "@material-ui/core/button"
import Grid from "@material-ui/core/Grid"


function ImageUpload() {
  const [images, setImages] = React.useState([]);
  const maxNumber = 1;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return (
    <div className="App">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps
        }) => (
          <>
          <Grid container direction="column" spacing={2} alignItems="center">
            <Grid item>
              <Button 
                color={isDragging? "secondary" : "primary"}
                variant="contained"
                onClick={onImageUpload}
                  {...dragProps}
              >
                Click or Drop here
              </Button>
            </Grid>
            <Grid item>
              {imageList.map((image, index) => (
                <Grid container justify="center" key={index}>
                  <Grid item>
                  <img src={image["data_url"]} alt="uploaded image" width="100" />
                  </Grid>
                  <Grid container justify="center">
                    <Button 
                      color="primary"
                      onClick={() => onImageUpdate(index)}
                      >
                        Update
                    </Button>
                    <Button 
                      color="primary"
                      onClick={() => onImageRemove(index)}
                      >
                        Remove
                    </Button>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Grid>
          </>
        )}
      </ImageUploading>
    </div>
  );
}

export default ImageUpload


