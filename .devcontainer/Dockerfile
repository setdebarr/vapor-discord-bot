FROM ubuntu:22.04

RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install \
    git nano curl wget git-lfs dirmngr gpg gawk bash-completion

RUN git clone https://github.com/asdf-vm/asdf.git ~/.asdf --branch v0.13.1 && \
    echo ". $HOME/.asdf/asdf.sh" >> ~/.bashrc && \
    echo ". $HOME/.asdf/completions/asdf.bash" >> ~/.bashrc && \
    bash -c ". $HOME/.asdf/asdf.sh; asdf plugin add nodejs https://github.com/asdf-vm/asdf-nodejs.git"

ENV EDITOR=nano
