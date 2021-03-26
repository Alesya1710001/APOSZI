FROM python:3.6.9-alpine
# set work directory
WORKDIR /usr/src/movies_poster
# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN apk update \
    && apk add postgresql-dev gcc python3-dev musl-dev


# install dependencies
RUN pip install --upgrade pip
COPY ./requirements.txt .
RUN pip install -r requirements.txt

COPY ./entrypoint.sh .
# copy project
COPY . .

ENTRYPOINT ["/usr/src/movies_poster/entrypoint.sh"]