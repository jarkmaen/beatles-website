import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/index.js";

class BlogPost extends Model {
    declare id: number;
    declare author: string;
    declare content: any;
    declare intro: string;
    declare slug: string;
    declare title: string;
    declare createdAt: Date;
}

BlogPost.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        author: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        content: {
            type: DataTypes.JSONB,
            allowNull: false
        },
        intro: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        slug: {
            type: DataTypes.TEXT,
            unique: true,
            allowNull: false
        },
        title: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
            field: "created_at"
        }
    },
    {
        modelName: "BlogPost",
        sequelize,
        tableName: "blog_post",
        timestamps: false
    }
);

export default BlogPost;
