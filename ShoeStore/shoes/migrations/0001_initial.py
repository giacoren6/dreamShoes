# Generated by Django 5.1 on 2024-08-18 12:45

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Shoe",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=100)),
                ("brand", models.CharField(max_length=100)),
                ("size", models.DecimalField(decimal_places=1, max_digits=4)),
                ("price", models.DecimalField(decimal_places=2, max_digits=8)),
                ("description", models.TextField()),
                ("image_url", models.URLField()),
            ],
        ),
    ]
