# migrations/0002_add_uuid_column.py
from uuid import uuid4
from django.db import migrations, models

def generate_uuids(apps, schema_editor):
    User = apps.get_model('users', 'User')
    for user in User.objects.all():
        user.uuid_id = uuid4()
        user.save()

class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='uuid_id',
            field=models.UUIDField(default=uuid4, editable=False),
            preserve_default=False,
        ),
        migrations.RunPython(generate_uuids),
    ]
