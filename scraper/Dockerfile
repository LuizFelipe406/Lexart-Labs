FROM python:3.8.13

WORKDIR /app-scraper

EXPOSE 5000

COPY ./ .

RUN python3 -m pip install --upgrade pip
RUN pip install -r dev-requirements.txt

CMD ["python", "main.py"]