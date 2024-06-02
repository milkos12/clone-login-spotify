FROM python:3.12.3

# Directory work
WORKDIR /app

# Copy files
COPY requirements.txt /app/

# Install dependences
RUN pip install --no-cache-dir -r requirements.txt

# Copy all conten from proyect to directory work Docker
COPY . /app/backend

# avoid error with stdin and stdout
ENV PYTHONUNBUFFERED 1

#Expose port
EXPOSE 8000

# Execute firts the migrantions and after start the server
CMD ["sh", "-c", "python manage.py migrate && python manage.py run server 0.0.0.0:8000"]


