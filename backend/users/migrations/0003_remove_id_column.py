# migrations/0003_remove_id_column.py
from django.db import migrations

class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_add_uuid_column'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='id',
        ),
    ]
