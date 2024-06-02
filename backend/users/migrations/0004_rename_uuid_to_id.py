# migrations/0004_rename_uuid_to_id.py
from django.db import migrations, models

class Migration(migrations.Migration):

    dependencies = [
        ('users', '0003_remove_id_column'),
    ]

    operations = [
        migrations.RenameField(
            model_name='user',
            old_name='uuid_id',
            new_name='id',
        ),
        migrations.AlterField(
            model_name='user',
            name='id',
            field=models.UUIDField(primary_key=True, editable=False),
        ),
    ]
