PGDMP     3                	    {         
   afflatusDb    15.4    15.4 ,    *           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            +           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            ,           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            -           1262    17585 
   afflatusDb    DATABASE     �   CREATE DATABASE "afflatusDb" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Portuguese_Brazil.1252';
    DROP DATABASE "afflatusDb";
                postgres    false            �            1259    17616    SpecialDate    TABLE     �   CREATE TABLE public."SpecialDate" (
    id integer NOT NULL,
    child_id integer NOT NULL,
    description character varying(255) NOT NULL,
    special_date date NOT NULL
);
 !   DROP TABLE public."SpecialDate";
       public         heap    postgres    false            �            1259    17615    SpecialDate_id_seq    SEQUENCE     �   CREATE SEQUENCE public."SpecialDate_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public."SpecialDate_id_seq";
       public          postgres    false    221            .           0    0    SpecialDate_id_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public."SpecialDate_id_seq" OWNED BY public."SpecialDate".id;
          public          postgres    false    220            �            1259    17609    child    TABLE     �   CREATE TABLE public.child (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    birthday date NOT NULL,
    customer_id integer NOT NULL
);
    DROP TABLE public.child;
       public         heap    postgres    false            �            1259    17608    child_id_seq    SEQUENCE     �   CREATE SEQUENCE public.child_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.child_id_seq;
       public          postgres    false    219            /           0    0    child_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.child_id_seq OWNED BY public.child.id;
          public          postgres    false    218            �            1259    17598 	   customers    TABLE       CREATE TABLE public.customers (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    cpf character varying(255),
    address character varying(255),
    phone character varying(255) NOT NULL,
    instagram character varying(255),
    birthday date
);
    DROP TABLE public.customers;
       public         heap    postgres    false            �            1259    17597    customers_id_seq    SEQUENCE     �   CREATE SEQUENCE public.customers_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.customers_id_seq;
       public          postgres    false    217            0           0    0    customers_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.customers_id_seq OWNED BY public.customers.id;
          public          postgres    false    216            �            1259    17633    session    TABLE     �   CREATE TABLE public.session (
    id integer NOT NULL,
    token character varying(255) NOT NULL,
    user_id integer,
    login_time date DEFAULT CURRENT_TIMESTAMP
);
    DROP TABLE public.session;
       public         heap    postgres    false            �            1259    17632    session_id_seq    SEQUENCE     �   CREATE SEQUENCE public.session_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.session_id_seq;
       public          postgres    false    223            1           0    0    session_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.session_id_seq OWNED BY public.session.id;
          public          postgres    false    222            �            1259    17587    user    TABLE     �   CREATE TABLE public."user" (
    id integer NOT NULL,
    username character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    user_admin boolean NOT NULL
);
    DROP TABLE public."user";
       public         heap    postgres    false            �            1259    17586    user_id_seq    SEQUENCE     �   CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.user_id_seq;
       public          postgres    false    215            2           0    0    user_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;
          public          postgres    false    214            |           2604    17619    SpecialDate id    DEFAULT     t   ALTER TABLE ONLY public."SpecialDate" ALTER COLUMN id SET DEFAULT nextval('public."SpecialDate_id_seq"'::regclass);
 ?   ALTER TABLE public."SpecialDate" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    221    220    221            {           2604    17612    child id    DEFAULT     d   ALTER TABLE ONLY public.child ALTER COLUMN id SET DEFAULT nextval('public.child_id_seq'::regclass);
 7   ALTER TABLE public.child ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    218    219    219            z           2604    17601    customers id    DEFAULT     l   ALTER TABLE ONLY public.customers ALTER COLUMN id SET DEFAULT nextval('public.customers_id_seq'::regclass);
 ;   ALTER TABLE public.customers ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    217    217            }           2604    17636 
   session id    DEFAULT     h   ALTER TABLE ONLY public.session ALTER COLUMN id SET DEFAULT nextval('public.session_id_seq'::regclass);
 9   ALTER TABLE public.session ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    222    223    223            y           2604    17590    user id    DEFAULT     d   ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);
 8   ALTER TABLE public."user" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    215    214    215            %          0    17616    SpecialDate 
   TABLE DATA           P   COPY public."SpecialDate" (id, child_id, description, special_date) FROM stdin;
    public          postgres    false    221   �/       #          0    17609    child 
   TABLE DATA           @   COPY public.child (id, name, birthday, customer_id) FROM stdin;
    public          postgres    false    219   
0       !          0    17598 	   customers 
   TABLE DATA           W   COPY public.customers (id, name, cpf, address, phone, instagram, birthday) FROM stdin;
    public          postgres    false    217   z0       '          0    17633    session 
   TABLE DATA           A   COPY public.session (id, token, user_id, login_time) FROM stdin;
    public          postgres    false    223   {1                 0    17587    user 
   TABLE DATA           D   COPY public."user" (id, username, password, user_admin) FROM stdin;
    public          postgres    false    215   �7       3           0    0    SpecialDate_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public."SpecialDate_id_seq"', 3, true);
          public          postgres    false    220            4           0    0    child_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.child_id_seq', 3, true);
          public          postgres    false    218            5           0    0    customers_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.customers_id_seq', 5, true);
          public          postgres    false    216            6           0    0    session_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.session_id_seq', 28, true);
          public          postgres    false    222            7           0    0    user_id_seq    SEQUENCE SET     9   SELECT pg_catalog.setval('public.user_id_seq', 2, true);
          public          postgres    false    214            �           2606    17621    SpecialDate SpecialDate_pk 
   CONSTRAINT     \   ALTER TABLE ONLY public."SpecialDate"
    ADD CONSTRAINT "SpecialDate_pk" PRIMARY KEY (id);
 H   ALTER TABLE ONLY public."SpecialDate" DROP CONSTRAINT "SpecialDate_pk";
       public            postgres    false    221            �           2606    17614    child child_pk 
   CONSTRAINT     L   ALTER TABLE ONLY public.child
    ADD CONSTRAINT child_pk PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.child DROP CONSTRAINT child_pk;
       public            postgres    false    219            �           2606    17607    customers customers_phone_key 
   CONSTRAINT     Y   ALTER TABLE ONLY public.customers
    ADD CONSTRAINT customers_phone_key UNIQUE (phone);
 G   ALTER TABLE ONLY public.customers DROP CONSTRAINT customers_phone_key;
       public            postgres    false    217            �           2606    17605    customers customers_pk 
   CONSTRAINT     T   ALTER TABLE ONLY public.customers
    ADD CONSTRAINT customers_pk PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.customers DROP CONSTRAINT customers_pk;
       public            postgres    false    217            �           2606    17639    session session_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.session
    ADD CONSTRAINT session_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.session DROP CONSTRAINT session_pkey;
       public            postgres    false    223            �           2606    17594    user user_pk 
   CONSTRAINT     L   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pk PRIMARY KEY (id);
 8   ALTER TABLE ONLY public."user" DROP CONSTRAINT user_pk;
       public            postgres    false    215            �           2606    17596    user user_username_key 
   CONSTRAINT     W   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_username_key UNIQUE (username);
 B   ALTER TABLE ONLY public."user" DROP CONSTRAINT user_username_key;
       public            postgres    false    215            �           2606    17627    SpecialDate SpecialDate_fk0    FK CONSTRAINT        ALTER TABLE ONLY public."SpecialDate"
    ADD CONSTRAINT "SpecialDate_fk0" FOREIGN KEY (child_id) REFERENCES public.child(id);
 I   ALTER TABLE ONLY public."SpecialDate" DROP CONSTRAINT "SpecialDate_fk0";
       public          postgres    false    221    219    3208            �           2606    17622    child child_fk0    FK CONSTRAINT     v   ALTER TABLE ONLY public.child
    ADD CONSTRAINT child_fk0 FOREIGN KEY (customer_id) REFERENCES public.customers(id);
 9   ALTER TABLE ONLY public.child DROP CONSTRAINT child_fk0;
       public          postgres    false    219    3206    217            �           2606    17640    session session_user_id_fkey    FK CONSTRAINT     |   ALTER TABLE ONLY public.session
    ADD CONSTRAINT session_user_id_fkey FOREIGN KEY (user_id) REFERENCES public."user"(id);
 F   ALTER TABLE ONLY public.session DROP CONSTRAINT session_user_id_fkey;
       public          postgres    false    215    223    3200            %   P   x�E���0 k{�,`䧁]h��4A*��T��l��'{K��(�/$3*�a�Fbh`P������J�=�너/�"0      #   `   x�3�HM)�WpK-*J�,J�4202�5��5��4�2��M,�LTpNM>�6',k�k`�k`�i�e��xq�BJ�BpfNH��X�� �8��b���� ���      !   �   x���1N�0E��)�Ɏ<�8�K�@����ƛ���%vBA�q8�^�8p 
��i���OÔ�)�q�K��pL!&�&e�"cY�3��a��y�	���a�,����6[�ޅ�%���Wê�����]ױ�d�����#�s�$�JW;�c�ې~�8O�a�vN��ǡk%w��a�ծ�Ń~=4���)~�~:�u��5�2��$n������z��,��_��´�Ta>�UU}Z�o      '   )  x���I������C�;DA-��r"�H�H����M��3dd��<YUk��'��`&j���@I��.!�ڱ���W�#Rv��w�(�:(�d��֮�'j*S�iѪ�:��,lf�d��b��s���9Z	p{t	�*VGY���J�s�?�g����������h��?�&wRñ�A��QI~��zٻ絴[)\��;q�f~i\n2Se�EA[t��}:�I�2!@�5v�����C~-���ގ�AV>_QA�[����5%�ݾ�G|�!B>�Nfz�*��r2J_��2T|�b����S%CC˺m(U�3�p�z�_�l|��N�b��3���D�_IURF�r_�;����y�F�u����~��}�ע�~:�7��f�gȪ}Q��%��"lú!���{)n"&�K��UO��C���t���|i%�?�)�ɔ�;%�!o쉪����;nJ���B�hsU{l֖�v&|�����$H0&v��S�}�;�;�}��g�����,��ŊtJY��vM`�������O�D ��o�����y�J�l���[����1%�c���W��d2K:��?����)Xlѯ�G���p�~�Y7��Z�t��K���u	瞹��F�_T�J� ���'�_(9L&��߅=<�w5���Eټ�_#b�Ƀ�J�����:i$}C���7��ҏ�[$��&�,޴Mr���X���f��M�4��.���1�N�I.VL��]Q�Df�]Q]-��b�WNL�a�	�b�v>4v�����$=���^�g`�PrI��~@��}j�JX}E)���락%���#�6���o���^t~ç����������~���WE]R1�v����VR�.�6�v J��K�;~����U�9S~����30i,�Ja��>����h��[���(�R�9w�0Z2�M^�M�]:�.?F�(�~�\�}��p}#I��f*M�c;M���I�v�.��x�Xnl�׉��=_����SH)8d{��?�P;�Qwws��t$��Ǽ��8D��MxW���K����x�L�L�
�7���\�f�J�4����ٲ�.���5�֖�>�4#�S�JM�L!�J�~���"��#4�
�p�`�Ct�L'���M=��K��v��������4��BU�Pv�ꑨ�L��L�t
��A�u�J^l�+��×����F�I�i��}
Y��������7�,��f7p5O���^t�6e�N�k��M�p�4�hֿ-������u�z����D�6��yOrE�=�8w����J�n\�I�i���h����a�`X����D`O��l�G�8�Ms�̶�����鲶�t�d�����B}2�ǾԄ�㖩ϟ��⒑ƞ[Ӿ���+�)&T��s<Q䌚6���.�_Y��~Yɾ��]"��d[��va��l�-#�n֪f�b��5F-�p����&� ��oh*2Æ��� ����Tvv�����\1�I����?,8��#��4@�W�q�P������f�@����������*L��[��E��'�?�����f�)�n            x�3�,����442615�,����� 7�^     