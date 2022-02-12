{ pkgs ? import (fetchTarball "https://github.com/NixOS/nixpkgs/archive/a54d2e72e282f2bc68c49f82c735cf664244ec75.tar.gz") {} }:

pkgs.mkShell {
  buildInputs = [
    pkgs.nodejs
    pkgs.yarn
  ];

  shellHook = ''
    echo "Starting Project Development Shell"
  '';
}

