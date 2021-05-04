import uvicorn
from fastapi import FastAPI, Request, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
app = FastAPI()

origins = [
    "http://localhost:3000",
    "localhost:3000"
]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)


class Item(BaseModel):
    name: str
    price: float
    is_offer: bool = None


class Result(BaseModel):
    code: int = 0
    message: str = ''
    items: List[Item] = None


class User(BaseModel):
    username: str
    hostname: str


@app.get("/api/user", response_model=User)
def read_user():
    import socket
    import getpass
    return {
        "username": getpass.getuser(),
        "hostname": socket.gethostname()
    }


@app.get("/api/")
def read_root():
    return {"Hello": "World"}


@app.get("/api/items/{item_id}", response_model=Result)
def read_item(item_id: int, q: str = None):
    return {"item_id": item_id, "q": q}


@app.put("/api/items/{item_id}")
def update_item(item_id: int, item: Item):
    return {"item_name": item.name, "item_id": item_id}


@app.post("/api/audioUpload")
async def audio(request: Request):
    f = await request.form()
    contents = await f['audio-file'].read()
    with open('sample.wav', 'wb') as aud:
        aud.write(contents)

    return 'Success'


if __name__ == "__main__":
    uvicorn.run("main:app", port=8000, reload=True)
