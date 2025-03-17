from fastapi import FastAPI
from pydantic import BaseModel
from .service.service_translater import func_translater
from .service.service_text_to_speech import func_speech
from .service.service_vision import sample_people_image_file
import uvicorn
from fastapi.middleware.cors import CORSMiddleware


class stc(BaseModel):
    sentance : str
    test : str | None = None


class img (BaseModel):
    image : str

app = FastAPI()

@app.post("/trad")
async def translate_stc(stc: stc) : 
    return func_translater(stc.sentance)

@app.post("/speech")
async def speech_stc(stc: stc):
    return func_speech(stc.sentance)

@app.post("/vision")
async def vision_img(img: img):
    return sample_people_image_file(img.image)

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)

origins = [
    "http://localhost:3000",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)